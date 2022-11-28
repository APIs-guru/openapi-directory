import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsFinalizedProposalsPausePathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsPauseRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsFinalizedProposalsPausePathParams;
    queryParams: Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams;
    request?: shared.PauseProposalDealsRequest;
    security: Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity;
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsPauseResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
