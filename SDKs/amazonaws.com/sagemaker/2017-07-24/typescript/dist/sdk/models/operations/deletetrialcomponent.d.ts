import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTrialComponentXAmzTargetEnum {
    SageMakerDeleteTrialComponent = "SageMaker.DeleteTrialComponent"
}
export declare class DeleteTrialComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrialComponentXAmzTargetEnum;
}
export declare class DeleteTrialComponentRequest extends SpeakeasyBase {
    headers: DeleteTrialComponentHeaders;
    request: shared.DeleteTrialComponentRequest;
}
export declare class DeleteTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    deleteTrialComponentResponse?: shared.DeleteTrialComponentResponse;
    resourceNotFound?: any;
    statusCode: number;
}
