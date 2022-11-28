import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureSmtpDomainPathParams extends SpeakeasyBase {
    domainName: string;
    hostname: string;
}
export declare class ConfigureSmtpDomainQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureSmtpDomainRequest extends SpeakeasyBase {
    pathParams: ConfigureSmtpDomainPathParams;
    queryParams: ConfigureSmtpDomainQueryParams;
    request?: shared.UpdateSmtpDomainRequest;
}
export declare class ConfigureSmtpDomainResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
}
