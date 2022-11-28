import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams;
    request?: shared.DealInput;
    security: AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse extends SpeakeasyBase {
    contentType: string;
    deal?: shared.Deal;
    statusCode: number;
}
