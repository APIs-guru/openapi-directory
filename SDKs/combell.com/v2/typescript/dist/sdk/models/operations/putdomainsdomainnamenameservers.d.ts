import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDomainsDomainNameNameserversPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class PutDomainsDomainNameNameserversQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class PutDomainsDomainNameNameserversRequest extends SpeakeasyBase {
    pathParams: PutDomainsDomainNameNameserversPathParams;
    queryParams: PutDomainsDomainNameNameserversQueryParams;
    request?: shared.EditNameServers;
}
export declare class PutDomainsDomainNameNameserversResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
