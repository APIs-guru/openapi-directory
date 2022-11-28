import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHostnameSuggestionXAmzTargetEnum {
    OpsWorks20130218GetHostnameSuggestion = "OpsWorks_20130218.GetHostnameSuggestion"
}
export declare class GetHostnameSuggestionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHostnameSuggestionXAmzTargetEnum;
}
export declare class GetHostnameSuggestionRequest extends SpeakeasyBase {
    headers: GetHostnameSuggestionHeaders;
    request: shared.GetHostnameSuggestionRequest;
}
export declare class GetHostnameSuggestionResponse extends SpeakeasyBase {
    contentType: string;
    getHostnameSuggestionResult?: shared.GetHostnameSuggestionResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
