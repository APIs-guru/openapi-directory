import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsProposalsUpdateQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProposalsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsUpdateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsUpdatePathParams;
    queryParams: Adexchangebuyer2AccountsProposalsUpdateQueryParams;
    request?: shared.ProposalInput;
    security: Adexchangebuyer2AccountsProposalsUpdateSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
