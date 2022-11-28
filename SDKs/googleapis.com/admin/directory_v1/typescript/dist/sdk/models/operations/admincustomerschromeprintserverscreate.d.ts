import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintServersCreateQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintServersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersCreateRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersCreatePathParams;
    queryParams: AdminCustomersChromePrintServersCreateQueryParams;
    request?: shared.PrintServerInput;
    security: AdminCustomersChromePrintServersCreateSecurity;
}
export declare class AdminCustomersChromePrintServersCreateResponse extends SpeakeasyBase {
    contentType: string;
    printServer?: shared.PrintServer;
    statusCode: number;
}
