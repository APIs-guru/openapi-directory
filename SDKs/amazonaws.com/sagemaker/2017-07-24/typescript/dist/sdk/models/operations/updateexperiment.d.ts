import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateExperimentXAmzTargetEnum {
    SageMakerUpdateExperiment = "SageMaker.UpdateExperiment"
}
export declare class UpdateExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateExperimentXAmzTargetEnum;
}
export declare class UpdateExperimentRequest extends SpeakeasyBase {
    headers: UpdateExperimentHeaders;
    request: shared.UpdateExperimentRequest;
}
export declare class UpdateExperimentResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateExperimentResponse?: shared.UpdateExperimentResponse;
}
