import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSearchSuggestionsXAmzTargetEnum {
    SageMakerGetSearchSuggestions = "SageMaker.GetSearchSuggestions"
}
export declare class GetSearchSuggestionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSearchSuggestionsXAmzTargetEnum;
}
export declare class GetSearchSuggestionsRequest extends SpeakeasyBase {
    headers: GetSearchSuggestionsHeaders;
    request: shared.GetSearchSuggestionsRequest;
}
export declare class GetSearchSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    getSearchSuggestionsResponse?: shared.GetSearchSuggestionsResponse;
    statusCode: number;
}
