import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTrainingJobXAmzTargetEnum {
    SageMakerCreateTrainingJob = "SageMaker.CreateTrainingJob"
}
export declare class CreateTrainingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrainingJobXAmzTargetEnum;
}
export declare class CreateTrainingJobRequest extends SpeakeasyBase {
    headers: CreateTrainingJobHeaders;
    request: shared.CreateTrainingJobRequest;
}
export declare class CreateTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    createTrainingJobResponse?: shared.CreateTrainingJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}
