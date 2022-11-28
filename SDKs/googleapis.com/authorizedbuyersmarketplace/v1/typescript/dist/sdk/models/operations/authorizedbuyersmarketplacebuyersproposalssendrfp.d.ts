import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpPathParams extends SpeakeasyBase {
    buyer: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsSendRfpPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsSendRfpQueryParams;
    request?: shared.SendRfpRequest;
    security: AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
