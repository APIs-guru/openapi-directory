import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams extends SpeakeasyBase {
    proposal: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationQueryParams;
    request?: Map<string, any>;
    security: AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
