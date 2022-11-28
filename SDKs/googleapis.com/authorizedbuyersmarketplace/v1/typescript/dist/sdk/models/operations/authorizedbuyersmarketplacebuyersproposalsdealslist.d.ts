import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsListQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsDealsListPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsDealsListQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse extends SpeakeasyBase {
    contentType: string;
    listDealsResponse?: shared.ListDealsResponse;
    statusCode: number;
}
