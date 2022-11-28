import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdexchangebuyerProposalsPatchUpdateActionEnum {
    Accept = "accept",
    Cancel = "cancel",
    Propose = "propose",
    ProposeAndAccept = "proposeAndAccept",
    UnknownAction = "unknownAction",
    UpdateNonTerms = "updateNonTerms"
}
export declare class AdexchangebuyerProposalsPatchPathParams extends SpeakeasyBase {
    proposalId: string;
    revisionNumber: string;
    updateAction: AdexchangebuyerProposalsPatchUpdateActionEnum;
}
export declare class AdexchangebuyerProposalsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProposalsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProposalsPatchRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerProposalsPatchPathParams;
    queryParams: AdexchangebuyerProposalsPatchQueryParams;
    request?: shared.Proposal;
    security: AdexchangebuyerProposalsPatchSecurity;
}
export declare class AdexchangebuyerProposalsPatchResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
