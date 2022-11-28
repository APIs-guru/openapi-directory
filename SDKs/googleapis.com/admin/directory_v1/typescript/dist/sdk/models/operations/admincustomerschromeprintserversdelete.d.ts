import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdminCustomersChromePrintServersDeleteQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintServersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersDeleteRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersDeletePathParams;
    queryParams: AdminCustomersChromePrintServersDeleteQueryParams;
    security: AdminCustomersChromePrintServersDeleteSecurity;
}
export declare class AdminCustomersChromePrintServersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
