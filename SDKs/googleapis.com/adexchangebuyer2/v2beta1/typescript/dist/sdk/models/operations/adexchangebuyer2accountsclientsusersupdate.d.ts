import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsUsersUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
    userId: string;
}
export declare class Adexchangebuyer2AccountsClientsUsersUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsClientsUsersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsUsersUpdateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsUsersUpdatePathParams;
    queryParams: Adexchangebuyer2AccountsClientsUsersUpdateQueryParams;
    request?: shared.ClientUser;
    security: Adexchangebuyer2AccountsClientsUsersUpdateSecurity;
}
export declare class Adexchangebuyer2AccountsClientsUsersUpdateResponse extends SpeakeasyBase {
    clientUser?: shared.ClientUser;
    contentType: string;
    statusCode: number;
}
