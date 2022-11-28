import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerAccountsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class AdexchangebuyerAccountsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerAccountsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerAccountsUpdatePathParams;
    queryParams: AdexchangebuyerAccountsUpdateQueryParams;
    request?: shared.Account;
    security: AdexchangebuyerAccountsUpdateSecurity;
}
export declare class AdexchangebuyerAccountsUpdateResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
