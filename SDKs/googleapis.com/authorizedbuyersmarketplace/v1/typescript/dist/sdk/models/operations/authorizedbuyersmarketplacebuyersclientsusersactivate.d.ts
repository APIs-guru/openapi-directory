import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams;
    request?: Map<string, any>;
    security: AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse extends SpeakeasyBase {
    clientUser?: shared.ClientUser;
    contentType: string;
    statusCode: number;
}
