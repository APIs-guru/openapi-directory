import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse extends SpeakeasyBase {
    contentType: string;
    listClientUsersResponse?: shared.ListClientUsersResponse;
    statusCode: number;
}
