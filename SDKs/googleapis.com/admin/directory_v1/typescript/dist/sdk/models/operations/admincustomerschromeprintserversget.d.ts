import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdminCustomersChromePrintServersGetQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintServersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersGetSecurity extends SpeakeasyBase {
    option1?: AdminCustomersChromePrintServersGetSecurityOption1;
    option2?: AdminCustomersChromePrintServersGetSecurityOption2;
}
export declare class AdminCustomersChromePrintServersGetRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersGetPathParams;
    queryParams: AdminCustomersChromePrintServersGetQueryParams;
    security: AdminCustomersChromePrintServersGetSecurity;
}
export declare class AdminCustomersChromePrintServersGetResponse extends SpeakeasyBase {
    contentType: string;
    printServer?: shared.PrintServer;
    statusCode: number;
}
