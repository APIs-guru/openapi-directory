import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams extends SpeakeasyBase {
    deal: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams;
    request?: Map<string, any>;
    security: AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse extends SpeakeasyBase {
    contentType: string;
    finalizedDeal?: shared.FinalizedDeal;
    statusCode: number;
}
