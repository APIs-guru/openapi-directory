import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsSitesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsSitesListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsSitesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSitesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSitesListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsSitesListSecurityOption1;
    option2?: AdsenseAccountsSitesListSecurityOption2;
}
export declare class AdsenseAccountsSitesListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsSitesListPathParams;
    queryParams: AdsenseAccountsSitesListQueryParams;
    security: AdsenseAccountsSitesListSecurity;
}
export declare class AdsenseAccountsSitesListResponse extends SpeakeasyBase {
    contentType: string;
    listSitesResponse?: shared.ListSitesResponse;
    statusCode: number;
}
