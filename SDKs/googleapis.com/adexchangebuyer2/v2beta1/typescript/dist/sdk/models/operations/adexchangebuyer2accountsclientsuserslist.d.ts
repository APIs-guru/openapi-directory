import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsUsersListPathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
}
export declare class Adexchangebuyer2AccountsClientsUsersListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsUsersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsUsersListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsUsersListPathParams;
    queryParams: Adexchangebuyer2AccountsClientsUsersListQueryParams;
    security: Adexchangebuyer2AccountsClientsUsersListSecurity;
}
export declare class Adexchangebuyer2AccountsClientsUsersListResponse extends SpeakeasyBase {
    contentType: string;
    listClientUsersResponse?: shared.ListClientUsersResponse;
    statusCode: number;
}
