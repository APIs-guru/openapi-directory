import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdmobAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsListSecurity extends SpeakeasyBase {
    option1?: AdmobAccountsListSecurityOption1;
    option2?: AdmobAccountsListSecurityOption2;
}
export declare class AdmobAccountsListRequest extends SpeakeasyBase {
    queryParams: AdmobAccountsListQueryParams;
    security: AdmobAccountsListSecurity;
}
export declare class AdmobAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listPublisherAccountsResponse?: shared.ListPublisherAccountsResponse;
    statusCode: number;
}
