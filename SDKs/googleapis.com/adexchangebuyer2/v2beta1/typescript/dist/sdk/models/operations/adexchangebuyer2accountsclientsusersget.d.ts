import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsUsersGetPathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
    userId: string;
}
export declare class Adexchangebuyer2AccountsClientsUsersGetQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsUsersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsUsersGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsUsersGetPathParams;
    queryParams: Adexchangebuyer2AccountsClientsUsersGetQueryParams;
    security: Adexchangebuyer2AccountsClientsUsersGetSecurity;
}
export declare class Adexchangebuyer2AccountsClientsUsersGetResponse extends SpeakeasyBase {
    clientUser?: shared.ClientUser;
    contentType: string;
    statusCode: number;
}
