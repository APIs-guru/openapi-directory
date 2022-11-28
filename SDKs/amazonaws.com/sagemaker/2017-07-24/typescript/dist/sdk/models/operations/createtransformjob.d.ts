import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTransformJobXAmzTargetEnum {
    SageMakerCreateTransformJob = "SageMaker.CreateTransformJob"
}
export declare class CreateTransformJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTransformJobXAmzTargetEnum;
}
export declare class CreateTransformJobRequest extends SpeakeasyBase {
    headers: CreateTransformJobHeaders;
    request: shared.CreateTransformJobRequest;
}
export declare class CreateTransformJobResponse extends SpeakeasyBase {
    contentType: string;
    createTransformJobResponse?: shared.CreateTransformJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}
