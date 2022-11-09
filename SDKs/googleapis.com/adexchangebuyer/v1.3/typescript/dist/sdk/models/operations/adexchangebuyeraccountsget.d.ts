import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerAccountsGetPathParams extends SpeakeasyBase {
    id: number;
}
export declare class AdexchangebuyerAccountsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerAccountsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerAccountsGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerAccountsGetPathParams;
    queryParams: AdexchangebuyerAccountsGetQueryParams;
    security: AdexchangebuyerAccountsGetSecurity;
}
export declare class AdexchangebuyerAccountsGetResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
