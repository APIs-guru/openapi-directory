import { SpeakeasyBase } from "../../../internal/utils";
export declare class Election extends SpeakeasyBase {
    candidateElectionYear?: number;
    candidateId?: string;
    candidateName?: string;
    candidatePccId?: string;
    candidatePccName?: string;
    cashOnHandEndPeriod?: number;
    committeeIds?: string[];
    coverageEndDate?: Date;
    incumbentChallengeFull?: string;
    partyFull?: string;
    totalDisbursements?: number;
    totalReceipts?: number;
}
