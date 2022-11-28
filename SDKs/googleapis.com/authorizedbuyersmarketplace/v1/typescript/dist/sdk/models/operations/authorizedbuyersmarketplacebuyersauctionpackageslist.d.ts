import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse extends SpeakeasyBase {
    contentType: string;
    listAuctionPackagesResponse?: shared.ListAuctionPackagesResponse;
    statusCode: number;
}
