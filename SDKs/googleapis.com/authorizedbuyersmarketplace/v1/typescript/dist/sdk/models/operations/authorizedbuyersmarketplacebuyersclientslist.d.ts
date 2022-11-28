import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersClientsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsListRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersClientsListPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersClientsListQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersClientsListSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersClientsListResponse extends SpeakeasyBase {
    contentType: string;
    listClientsResponse?: shared.ListClientsResponse;
    statusCode: number;
}
