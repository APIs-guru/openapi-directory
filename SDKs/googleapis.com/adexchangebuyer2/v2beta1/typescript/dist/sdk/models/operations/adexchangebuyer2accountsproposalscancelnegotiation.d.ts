import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsCancelNegotiationRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams;
    queryParams: Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams;
    request?: Map<string, any>;
    security: Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsCancelNegotiationResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
