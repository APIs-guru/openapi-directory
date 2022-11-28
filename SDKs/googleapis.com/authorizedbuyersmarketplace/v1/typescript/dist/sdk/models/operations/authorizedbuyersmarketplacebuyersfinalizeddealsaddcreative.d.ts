import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams extends SpeakeasyBase {
    deal: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams;
    request?: shared.AddCreativeRequest;
    security: AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse extends SpeakeasyBase {
    contentType: string;
    finalizedDeal?: shared.FinalizedDeal;
    statusCode: number;
}
