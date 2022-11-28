import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMailZonePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetMailZoneQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetMailZoneRequest extends SpeakeasyBase {
    pathParams: GetMailZonePathParams;
    queryParams: GetMailZoneQueryParams;
}
export declare class GetMailZoneResponse extends SpeakeasyBase {
    contentType: string;
    mailZone?: shared.MailZone;
    statusCode: number;
}
