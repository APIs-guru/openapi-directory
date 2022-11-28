import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    filterAdClientId: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsListRequest extends SpeakeasyBase {
    queryParams: AdsensehostAccountsListQueryParams;
    security: AdsensehostAccountsListSecurity;
}
export declare class AdsensehostAccountsListResponse extends SpeakeasyBase {
    accounts?: shared.Accounts;
    contentType: string;
    statusCode: number;
}
