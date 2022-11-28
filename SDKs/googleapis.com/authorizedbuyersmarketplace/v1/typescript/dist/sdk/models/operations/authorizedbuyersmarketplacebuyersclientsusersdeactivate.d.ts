import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams;
    request?: Map<string, any>;
    security: AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse extends SpeakeasyBase {
    clientUser?: shared.ClientUser;
    contentType: string;
    statusCode: number;
}
