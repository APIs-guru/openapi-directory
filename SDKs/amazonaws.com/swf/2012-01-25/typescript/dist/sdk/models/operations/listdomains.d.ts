import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDomainsQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum ListDomainsXAmzTargetEnum {
    SimpleWorkflowServiceListDomains = "SimpleWorkflowService.ListDomains"
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
    request: shared.ListDomainsInput;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    contentType: string;
    domainInfos?: shared.DomainInfos;
    operationNotPermittedFault?: any;
    statusCode: number;
}
