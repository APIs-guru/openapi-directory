import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDomainSuggestionsXAmzTargetEnum {
    Route53DomainsV20140515GetDomainSuggestions = "Route53Domains_v20140515.GetDomainSuggestions"
}
export declare class GetDomainSuggestionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDomainSuggestionsXAmzTargetEnum;
}
export declare class GetDomainSuggestionsRequest extends SpeakeasyBase {
    headers: GetDomainSuggestionsHeaders;
    request: shared.GetDomainSuggestionsRequest;
}
export declare class GetDomainSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    getDomainSuggestionsResponse?: shared.GetDomainSuggestionsResponse;
    invalidInput?: any;
    statusCode: number;
    unsupportedTld?: any;
}
