import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintersListQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersListSecurity extends SpeakeasyBase {
    option1?: AdminCustomersChromePrintersListSecurityOption1;
    option2?: AdminCustomersChromePrintersListSecurityOption2;
}
export declare class AdminCustomersChromePrintersListRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintersListPathParams;
    queryParams: AdminCustomersChromePrintersListQueryParams;
    security: AdminCustomersChromePrintersListSecurity;
}
export declare class AdminCustomersChromePrintersListResponse extends SpeakeasyBase {
    contentType: string;
    listPrintersResponse?: shared.ListPrintersResponse;
    statusCode: number;
}
