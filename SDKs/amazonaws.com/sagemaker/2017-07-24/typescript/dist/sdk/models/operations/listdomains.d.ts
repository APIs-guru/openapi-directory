import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDomainsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDomainsXAmzTargetEnum {
    SageMakerListDomains = "SageMaker.ListDomains"
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
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
}
