import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsDomainNamePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetDomainsDomainNameQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetDomainsDomainNameRequest extends SpeakeasyBase {
    pathParams: GetDomainsDomainNamePathParams;
    queryParams: GetDomainsDomainNameQueryParams;
}
export declare class GetDomainsDomainNameResponse extends SpeakeasyBase {
    contentType: string;
    domainDetail?: shared.DomainDetail;
    statusCode: number;
}
