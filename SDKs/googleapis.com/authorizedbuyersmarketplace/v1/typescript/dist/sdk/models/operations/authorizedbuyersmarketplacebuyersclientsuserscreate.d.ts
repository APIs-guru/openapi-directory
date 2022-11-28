import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersCreateQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersClientsUsersCreatePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersClientsUsersCreateQueryParams;
    request?: shared.ClientUserInput;
    security: AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse extends SpeakeasyBase {
    clientUser?: shared.ClientUser;
    contentType: string;
    statusCode: number;
}
