import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDomainsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare enum ListDomainsXAmzTargetEnum {
    Route53DomainsV20140515ListDomains = "Route53Domains_v20140515.ListDomains"
}
export declare class ListDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDomainsXAmzTargetEnum;
}
export declare class ListDomainsRequest extends SpeakeasyBase {
    queryParams: ListDomainsQueryParams;
    headers: ListDomainsHeaders;
    request: shared.ListDomainsRequest;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
}
