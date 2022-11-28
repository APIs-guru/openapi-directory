import { SpeakeasyBase } from "../../../internal/utils";
export declare class CandidatePrincipalCommittees extends SpeakeasyBase {
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
    state?: string;
    treasurerName?: string;
}
export declare class Candidate extends SpeakeasyBase {
    activeThrough?: number;
    candidateId?: string;
    candidateInactive?: boolean;
    candidateStatus?: string;
    cycles?: number[];
    district?: string;
    districtNumber?: number;
    electionDistricts?: string[];
    electionYears?: number[];
    federalFundsFlag?: boolean;
    firstFileDate?: Date;
    hasRaisedFunds?: boolean;
    inactiveElectionYears?: number[];
    incumbentChallenge?: string;
    incumbentChallengeFull?: string;
    lastF2Date?: Date;
    lastFileDate?: Date;
    loadDate?: Date;
    name?: string;
    office?: string;
    officeFull?: string;
    party?: string;
    partyFull?: string;
    principalCommittees?: CandidatePrincipalCommittees[];
    state?: string;
}
