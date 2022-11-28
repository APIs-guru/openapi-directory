import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSmtpDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateSmtpDomainQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateSmtpDomainRequest extends SpeakeasyBase {
    pathParams: CreateSmtpDomainPathParams;
    queryParams: CreateSmtpDomainQueryParams;
    request?: shared.CreateSmtpDomainRequest;
}
export declare class CreateSmtpDomainResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
