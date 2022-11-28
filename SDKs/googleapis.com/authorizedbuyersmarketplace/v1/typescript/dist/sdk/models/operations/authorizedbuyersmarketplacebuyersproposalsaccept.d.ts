import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams;
    request?: shared.AcceptProposalRequest;
    security: AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
