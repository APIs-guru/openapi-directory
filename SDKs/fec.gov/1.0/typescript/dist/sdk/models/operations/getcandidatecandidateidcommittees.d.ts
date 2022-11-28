import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdCommitteesPathParams extends SpeakeasyBase {
    candidateId: string;
}
export declare enum GetCandidateCandidateIdCommitteesCommitteeTypeEnum {
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
export declare enum GetCandidateCandidateIdCommitteesDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetCandidateCandidateIdCommitteesFilingFrequencyEnum {
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
export declare enum GetCandidateCandidateIdCommitteesOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare class GetCandidateCandidateIdCommitteesQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeType?: GetCandidateCandidateIdCommitteesCommitteeTypeEnum[];
    cycle?: number[];
    designation?: GetCandidateCandidateIdCommitteesDesignationEnum[];
    filingFrequency?: GetCandidateCandidateIdCommitteesFilingFrequencyEnum[];
    organizationType?: GetCandidateCandidateIdCommitteesOrganizationTypeEnum[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    year?: number[];
}
export declare class GetCandidateCandidateIdCommitteesRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdCommitteesPathParams;
    queryParams: GetCandidateCandidateIdCommitteesQueryParams;
}
export declare class GetCandidateCandidateIdCommitteesResponse extends SpeakeasyBase {
    committeeDetailPage?: shared.CommitteeDetailPage;
    contentType: string;
    statusCode: number;
}
