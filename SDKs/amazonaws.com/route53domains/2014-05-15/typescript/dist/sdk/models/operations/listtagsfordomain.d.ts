import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515ListTagsForDomain = "Route53Domains_v20140515.ListTagsForDomain"
}
export declare class ListTagsForDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForDomainXAmzTargetEnum;
}
export declare class ListTagsForDomainRequest extends SpeakeasyBase {
    headers: ListTagsForDomainHeaders;
    request: shared.ListTagsForDomainRequest;
}
export declare class ListTagsForDomainResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    listTagsForDomainResponse?: shared.ListTagsForDomainResponse;
    operationLimitExceeded?: any;
    statusCode: number;
    unsupportedTld?: any;
}
