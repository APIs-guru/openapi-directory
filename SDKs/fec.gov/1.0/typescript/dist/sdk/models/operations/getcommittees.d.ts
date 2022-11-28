import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommitteesCommitteeTypeEnum {
    Unknown = "",
    C = "C",
    D = "D",
    E = "E",
    H = "H",
    I = "I",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    S = "S",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
export declare enum GetCommitteesDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetCommitteesFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}
export declare enum GetCommitteesOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare class GetCommitteesQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    committeeType?: GetCommitteesCommitteeTypeEnum[];
    cycle?: number[];
    designation?: GetCommitteesDesignationEnum[];
    filingFrequency?: GetCommitteesFilingFrequencyEnum[];
    maxFirstFileDate?: Date;
    maxLastF1Date?: Date;
    minFirstFileDate?: Date;
    minLastF1Date?: Date;
    organizationType?: GetCommitteesOrganizationTypeEnum[];
    page?: number;
    party?: string[];
    perPage?: number;
    q?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    sponsorCandidateId?: string[];
    state?: string[];
    treasurerName?: string[];
    year?: number[];
}
export declare class GetCommitteesRequest extends SpeakeasyBase {
    queryParams: GetCommitteesQueryParams;
}
export declare class GetCommitteesResponse extends SpeakeasyBase {
    committeePage?: shared.CommitteePage;
    contentType: string;
    statusCode: number;
}
