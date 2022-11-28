import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateExperimentXAmzTargetEnum {
    SageMakerCreateExperiment = "SageMaker.CreateExperiment"
}
export declare class CreateExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExperimentXAmzTargetEnum;
}
export declare class CreateExperimentRequest extends SpeakeasyBase {
    headers: CreateExperimentHeaders;
    request: shared.CreateExperimentRequest;
}
export declare class CreateExperimentResponse extends SpeakeasyBase {
    contentType: string;
    createExperimentResponse?: shared.CreateExperimentResponse;
    resourceLimitExceeded?: any;
    statusCode: number;
}
