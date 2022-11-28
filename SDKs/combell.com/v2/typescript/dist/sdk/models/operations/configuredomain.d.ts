import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureDomainQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureDomainRequest extends SpeakeasyBase {
    pathParams: ConfigureDomainPathParams;
    queryParams: ConfigureDomainQueryParams;
    request?: shared.EditDomainWillRenewRequest;
}
export declare class ConfigureDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
