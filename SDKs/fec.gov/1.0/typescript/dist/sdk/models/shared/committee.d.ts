import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommitteeSponsorCandidateList extends SpeakeasyBase {
    sponsorCandidateId?: string;
    sponsorCandidateName?: string;
}
export declare class Committee extends SpeakeasyBase {
    affiliatedCommitteeName?: string;
    candidateIds?: string[];
    committeeId: string;
    committeeType?: string;
    committeeTypeFull?: string;
    cycles?: number[];
    designation?: string;
    designationFull?: string;
    filingFrequency?: string;
    firstFileDate?: Date;
    lastF1Date?: Date;
    lastFileDate?: Date;
    name?: string;
    organizationType?: string;
    organizationTypeFull?: string;
    party?: string;
    partyFull?: string;
    sponsorCandidateIds?: string[];
    sponsorCandidateList?: CommitteeSponsorCandidateList[];
    state?: string;
    treasurerName?: string;
}
