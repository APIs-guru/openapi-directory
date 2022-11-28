import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdminCustomersChromePrintersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersCreateRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintersCreatePathParams;
    queryParams: AdminCustomersChromePrintersCreateQueryParams;
    request?: shared.PrinterInput;
    security: AdminCustomersChromePrintersCreateSecurity;
}
export declare class AdminCustomersChromePrintersCreateResponse extends SpeakeasyBase {
    contentType: string;
    printer?: shared.Printer;
    statusCode: number;
}
