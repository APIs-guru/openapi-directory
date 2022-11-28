import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelXAmzTargetEnum {
    SageMakerCreateModel = "SageMaker.CreateModel"
}
export declare class CreateModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelXAmzTargetEnum;
}
export declare class CreateModelRequest extends SpeakeasyBase {
    headers: CreateModelHeaders;
    request: shared.CreateModelInput;
}
export declare class CreateModelResponse extends SpeakeasyBase {
    contentType: string;
    createModelOutput?: shared.CreateModelOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
