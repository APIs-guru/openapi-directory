import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTrainingJobXAmzTargetEnum {
    SageMakerUpdateTrainingJob = "SageMaker.UpdateTrainingJob"
}
export declare class UpdateTrainingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrainingJobXAmzTargetEnum;
}
export declare class UpdateTrainingJobRequest extends SpeakeasyBase {
    headers: UpdateTrainingJobHeaders;
    request: shared.UpdateTrainingJobRequest;
}
export declare class UpdateTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateTrainingJobResponse?: shared.UpdateTrainingJobResponse;
}
