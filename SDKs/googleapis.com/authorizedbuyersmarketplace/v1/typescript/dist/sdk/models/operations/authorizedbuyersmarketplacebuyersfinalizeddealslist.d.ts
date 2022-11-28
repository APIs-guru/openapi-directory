import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse extends SpeakeasyBase {
    contentType: string;
    listFinalizedDealsResponse?: shared.ListFinalizedDealsResponse;
    statusCode: number;
}
