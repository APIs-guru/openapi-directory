import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTrialXAmzTargetEnum {
    SageMakerDeleteTrial = "SageMaker.DeleteTrial"
}
export declare class DeleteTrialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrialXAmzTargetEnum;
}
export declare class DeleteTrialRequest extends SpeakeasyBase {
    headers: DeleteTrialHeaders;
    request: shared.DeleteTrialRequest;
}
export declare class DeleteTrialResponse extends SpeakeasyBase {
    contentType: string;
    deleteTrialResponse?: shared.DeleteTrialResponse;
    resourceNotFound?: any;
    statusCode: number;
}
