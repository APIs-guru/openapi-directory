import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsListPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsensehostAccountsAdunitsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeInactive?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsListRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsListPathParams;
    queryParams: AdsensehostAccountsAdunitsListQueryParams;
    security: AdsensehostAccountsAdunitsListSecurity;
}
export declare class AdsensehostAccountsAdunitsListResponse extends SpeakeasyBase {
    adUnits?: shared.AdUnits;
    contentType: string;
    statusCode: number;
}
