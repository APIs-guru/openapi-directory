import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdexchangebuyerProposalsUpdateUpdateActionEnum {
    Accept = "accept",
    Cancel = "cancel",
    Propose = "propose",
    ProposeAndAccept = "proposeAndAccept",
    UnknownAction = "unknownAction",
    UpdateNonTerms = "updateNonTerms"
}
export declare class AdexchangebuyerProposalsUpdatePathParams extends SpeakeasyBase {
    proposalId: string;
    revisionNumber: string;
    updateAction: AdexchangebuyerProposalsUpdateUpdateActionEnum;
}
export declare class AdexchangebuyerProposalsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProposalsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProposalsUpdateRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerProposalsUpdatePathParams;
    queryParams: AdexchangebuyerProposalsUpdateQueryParams;
    request?: shared.Proposal;
    security: AdexchangebuyerProposalsUpdateSecurity;
}
export declare class AdexchangebuyerProposalsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
