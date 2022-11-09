import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsGetAdCodePathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    adUnitId: string;
}
export declare class AdsensehostAccountsAdunitsGetAdCodeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    hostCustomChannelId?: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsGetAdCodeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsGetAdCodeRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsGetAdCodePathParams;
    queryParams: AdsensehostAccountsAdunitsGetAdCodeQueryParams;
    security: AdsensehostAccountsAdunitsGetAdCodeSecurity;
}
export declare class AdsensehostAccountsAdunitsGetAdCodeResponse extends SpeakeasyBase {
    adCode?: shared.AdCode;
    contentType: string;
    statusCode: number;
}
