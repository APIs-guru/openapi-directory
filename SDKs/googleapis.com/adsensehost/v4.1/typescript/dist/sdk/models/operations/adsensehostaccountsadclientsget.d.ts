import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdclientsGetPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsensehostAccountsAdclientsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdclientsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdclientsGetRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdclientsGetPathParams;
    queryParams: AdsensehostAccountsAdclientsGetQueryParams;
    security: AdsensehostAccountsAdclientsGetSecurity;
}
export declare class AdsensehostAccountsAdclientsGetResponse extends SpeakeasyBase {
    adClient?: shared.AdClient;
    contentType: string;
    statusCode: number;
}
