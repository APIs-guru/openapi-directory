import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopTransformJobXAmzTargetEnum {
    SageMakerStopTransformJob = "SageMaker.StopTransformJob"
}
export declare class StopTransformJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTransformJobXAmzTargetEnum;
}
export declare class StopTransformJobRequest extends SpeakeasyBase {
    headers: StopTransformJobHeaders;
    request: shared.StopTransformJobRequest;
}
export declare class StopTransformJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
