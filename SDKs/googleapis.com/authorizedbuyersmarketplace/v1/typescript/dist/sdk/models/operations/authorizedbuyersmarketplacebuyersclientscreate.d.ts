import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersClientsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsCreateQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsCreateRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersClientsCreatePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersClientsCreateQueryParams;
    request?: shared.ClientInput;
    security: AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsCreateResponse extends SpeakeasyBase {
    client?: shared.Client;
    contentType: string;
    statusCode: number;
}
