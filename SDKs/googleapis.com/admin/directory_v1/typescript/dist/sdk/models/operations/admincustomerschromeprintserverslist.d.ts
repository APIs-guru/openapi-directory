import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintServersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    orgUnitId?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdminCustomersChromePrintServersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersListSecurity extends SpeakeasyBase {
    option1?: AdminCustomersChromePrintServersListSecurityOption1;
    option2?: AdminCustomersChromePrintServersListSecurityOption2;
}
export declare class AdminCustomersChromePrintServersListRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersListPathParams;
    queryParams: AdminCustomersChromePrintServersListQueryParams;
    security: AdminCustomersChromePrintServersListSecurity;
}
export declare class AdminCustomersChromePrintServersListResponse extends SpeakeasyBase {
    contentType: string;
    listPrintServersResponse?: shared.ListPrintServersResponse;
    statusCode: number;
}
