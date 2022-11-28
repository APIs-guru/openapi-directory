import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsAdUnitsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdmobAccountsAdUnitsListQueryParams extends SpeakeasyBase {
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
export declare class AdmobAccountsAdUnitsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsAdUnitsListRequest extends SpeakeasyBase {
    pathParams: AdmobAccountsAdUnitsListPathParams;
    queryParams: AdmobAccountsAdUnitsListQueryParams;
    security: AdmobAccountsAdUnitsListSecurity;
}
export declare class AdmobAccountsAdUnitsListResponse extends SpeakeasyBase {
    contentType: string;
    listAdUnitsResponse?: shared.ListAdUnitsResponse;
    statusCode: number;
}
