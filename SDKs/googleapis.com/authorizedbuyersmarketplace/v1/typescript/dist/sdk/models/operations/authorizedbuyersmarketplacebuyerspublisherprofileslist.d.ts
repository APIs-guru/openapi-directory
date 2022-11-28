import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersPublisherProfilesListPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersPublisherProfilesListQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    listPublisherProfilesResponse?: shared.ListPublisherProfilesResponse;
    statusCode: number;
}
