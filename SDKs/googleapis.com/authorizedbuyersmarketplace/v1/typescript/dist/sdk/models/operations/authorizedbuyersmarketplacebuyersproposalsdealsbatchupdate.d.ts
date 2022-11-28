import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams;
    request?: shared.BatchUpdateDealsRequestInput;
    security: AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateDealsResponse?: shared.BatchUpdateDealsResponse;
    contentType: string;
    statusCode: number;
}
