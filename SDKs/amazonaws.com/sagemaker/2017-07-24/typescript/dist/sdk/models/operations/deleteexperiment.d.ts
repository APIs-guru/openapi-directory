import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteExperimentXAmzTargetEnum {
    SageMakerDeleteExperiment = "SageMaker.DeleteExperiment"
}
export declare class DeleteExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteExperimentXAmzTargetEnum;
}
export declare class DeleteExperimentRequest extends SpeakeasyBase {
    headers: DeleteExperimentHeaders;
    request: shared.DeleteExperimentRequest;
}
export declare class DeleteExperimentResponse extends SpeakeasyBase {
    contentType: string;
    deleteExperimentResponse?: shared.DeleteExperimentResponse;
    resourceNotFound?: any;
    statusCode: number;
}
