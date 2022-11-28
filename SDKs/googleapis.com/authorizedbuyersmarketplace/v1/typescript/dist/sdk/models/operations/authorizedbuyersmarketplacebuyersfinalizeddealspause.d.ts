import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPausePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsPausePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseQueryParams;
    request?: shared.PauseFinalizedDealRequest;
    security: AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse extends SpeakeasyBase {
    contentType: string;
    finalizedDeal?: shared.FinalizedDeal;
    statusCode: number;
}
