import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSmtpDomainPathParams extends SpeakeasyBase {
    domainName: string;
    hostname: string;
}
export declare class DeleteSmtpDomainQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteSmtpDomainRequest extends SpeakeasyBase {
    pathParams: DeleteSmtpDomainPathParams;
    queryParams: DeleteSmtpDomainQueryParams;
}
export declare class DeleteSmtpDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
