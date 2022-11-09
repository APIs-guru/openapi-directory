import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsGetPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsensehostAccountsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsGetRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsGetPathParams;
    queryParams: AdsensehostAccountsGetQueryParams;
    security: AdsensehostAccountsGetSecurity;
}
export declare class AdsensehostAccountsGetResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
