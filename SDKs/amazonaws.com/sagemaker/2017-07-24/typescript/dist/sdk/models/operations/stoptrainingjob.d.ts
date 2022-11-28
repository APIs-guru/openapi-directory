import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopTrainingJobXAmzTargetEnum {
    SageMakerStopTrainingJob = "SageMaker.StopTrainingJob"
}
export declare class StopTrainingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTrainingJobXAmzTargetEnum;
}
export declare class StopTrainingJobRequest extends SpeakeasyBase {
    headers: StopTrainingJobHeaders;
    request: shared.StopTrainingJobRequest;
}
export declare class StopTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
