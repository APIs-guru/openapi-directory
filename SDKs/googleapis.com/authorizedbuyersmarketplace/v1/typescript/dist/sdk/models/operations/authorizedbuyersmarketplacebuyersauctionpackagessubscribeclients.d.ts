import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsPathParams extends SpeakeasyBase {
    auctionPackage: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsQueryParams;
    request?: shared.SubscribeClientsRequest;
    security: AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse extends SpeakeasyBase {
    auctionPackage?: shared.AuctionPackage;
    contentType: string;
    statusCode: number;
}
