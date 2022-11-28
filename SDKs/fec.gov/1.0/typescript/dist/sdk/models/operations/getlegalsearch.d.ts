import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLegalSearchAoCategoryEnum {
    F = "F",
    V = "V",
    D = "D",
    R = "R",
    W = "W",
    C = "C",
    S = "S"
}
export declare class GetLegalSearchQueryParams extends SpeakeasyBase {
    afCommitteeId?: string;
    afFdFineAmount?: number;
    afMaxFdDate?: Date;
    afMaxRtbDate?: Date;
    afMinFdDate?: Date;
    afMinRtbDate?: Date;
    afName?: string[];
    afReportYear?: string;
    afRtbFineAmount?: number;
    aoCategory?: GetLegalSearchAoCategoryEnum[];
    aoCitationRequireAll?: boolean;
    aoEntityName?: string[];
    aoIsPending?: boolean;
    aoMaxIssueDate?: Date;
    aoMaxRequestDate?: Date;
    aoMinIssueDate?: Date;
    aoMinRequestDate?: Date;
    aoName?: string[];
    aoNo?: string[];
    aoRegulatoryCitation?: string[];
    aoRequestor?: string;
    aoRequestorType?: number[];
    aoStatus?: string;
    aoStatutoryCitation?: string[];
    apiKey: string;
    caseDispositions?: string[];
    caseDocumentCategory?: string[];
    caseElectionCycles?: number;
    caseMaxCloseDate?: Date;
    caseMaxOpenDate?: Date;
    caseMinCloseDate?: Date;
    caseMinOpenDate?: Date;
    caseNo?: string[];
    caseRespondents?: string;
    fromHit?: number;
    hitsReturned?: number;
    murType?: string;
    q?: string;
    type?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes extends SpeakeasyBase {
    action?: string;
    voteDate?: Date;
}
export declare class GetLegalSearchDefaultApplicationJsonAdminFinesDocuments extends SpeakeasyBase {
    category?: string;
    description?: string;
    documentDate?: Date;
    documentId?: number;
    length?: number;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdminFines extends SpeakeasyBase {
    challengeOutcome?: string;
    challengeReceiptDate?: Date;
    checkAmount?: number;
    commissionVotes?: GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes[];
    committeeId?: string;
    docId?: string;
    documentHighlights?: Map<string, any>;
    documents?: GetLegalSearchDefaultApplicationJsonAdminFinesDocuments[];
    finalDeterminationAmount?: number;
    finalDeterminationDate?: Date;
    highlights?: string[];
    name?: string;
    no?: string;
    petitionCourtDecisionDate?: Date;
    petitionCourtFilingDate?: Date;
    reasonToBelieveActionDate?: Date;
    reasonToBelieveFineAmount?: number;
    reportType?: string;
    reportYear?: string;
    treasuryReferralAmount?: number;
    treasuryReferralDate?: Date;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes extends SpeakeasyBase {
    action?: string;
    voteDate?: Date;
}
export declare class GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations extends SpeakeasyBase {
    text?: string;
    title?: string;
    type?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdrsDispositions extends SpeakeasyBase {
    citations?: GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations[];
    disposition?: string;
    penalty?: number;
    respondent?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdrsDocuments extends SpeakeasyBase {
    category?: string;
    description?: string;
    documentDate?: Date;
    documentId?: number;
    length?: number;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdrsParticipants extends SpeakeasyBase {
    citations?: Map<string, any>;
    name?: string;
    role?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdrs extends SpeakeasyBase {
    closeDate?: Date;
    commissionVotes?: GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes[];
    dispositions?: GetLegalSearchDefaultApplicationJsonAdrsDispositions[];
    docId?: string;
    documentHighlights?: Map<string, any>;
    documents?: GetLegalSearchDefaultApplicationJsonAdrsDocuments[];
    electionCycles?: number;
    highlights?: string[];
    name?: string;
    no?: string;
    openDate?: Date;
    participants?: GetLegalSearchDefaultApplicationJsonAdrsParticipants[];
    respondents?: string[];
    subjects?: string[];
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations extends SpeakeasyBase {
    name?: string;
    no?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy extends SpeakeasyBase {
    name?: string;
    no?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments extends SpeakeasyBase {
    category?: string;
    date?: Date;
    description?: string;
    documentId?: number;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities extends SpeakeasyBase {
    name?: string;
    role?: string;
    type?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations extends SpeakeasyBase {
    part?: number;
    section?: number;
    title?: number;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations extends SpeakeasyBase {
    section?: string;
    title?: number;
}
export declare class GetLegalSearchDefaultApplicationJsonAdvisoryOpinions extends SpeakeasyBase {
    aoCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations[];
    aosCitedBy?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy[];
    commenterNames?: string[];
    documentHighlights?: Map<string, any>;
    documents?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments[];
    entities?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities[];
    highlights?: string[];
    isPending?: boolean;
    issueDate?: Date;
    name?: string;
    no?: string;
    regulatoryCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations[];
    representativeNames?: string[];
    requestDate?: Date;
    requestorNames?: string[];
    requestorTypes?: string[];
    status?: string;
    statutoryCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations[];
    summary?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonMursCommissionVotes extends SpeakeasyBase {
    action?: string;
    voteDate?: Date;
}
export declare class GetLegalSearchDefaultApplicationJsonMursDispositionsCitations extends SpeakeasyBase {
    text?: string;
    title?: string;
    type?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonMursDispositions extends SpeakeasyBase {
    citations?: GetLegalSearchDefaultApplicationJsonMursDispositionsCitations[];
    disposition?: string;
    penalty?: number;
    respondent?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonMursDocuments extends SpeakeasyBase {
    category?: string;
    description?: string;
    documentDate?: Date;
    documentId?: number;
    length?: number;
    url?: string;
}
export declare enum GetLegalSearchDefaultApplicationJsonMursMurTypeEnum {
    Current = "current",
    Archived = "archived"
}
export declare class GetLegalSearchDefaultApplicationJsonMursParticipants extends SpeakeasyBase {
    citations?: Map<string, any>;
    name?: string;
    role?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonMurs extends SpeakeasyBase {
    closeDate?: Date;
    commissionVotes?: GetLegalSearchDefaultApplicationJsonMursCommissionVotes[];
    dispositions?: GetLegalSearchDefaultApplicationJsonMursDispositions[];
    docId?: string;
    documentHighlights?: Map<string, any>;
    documents?: GetLegalSearchDefaultApplicationJsonMursDocuments[];
    electionCycles?: number;
    highlights?: string[];
    murType?: GetLegalSearchDefaultApplicationJsonMursMurTypeEnum;
    name?: string;
    no?: string;
    openDate?: Date;
    participants?: GetLegalSearchDefaultApplicationJsonMursParticipants[];
    respondents?: string[];
    subjects?: string[];
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonRegulations extends SpeakeasyBase {
    docId?: string;
    documentHighlights?: Map<string, any>;
    highlights?: string[];
    name?: string;
    no?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJsonStatutes extends SpeakeasyBase {
    chapter?: string;
    docId?: string;
    documentHighlights?: Map<string, any>;
    highlights?: string[];
    name?: string;
    no?: string;
    title?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJson extends SpeakeasyBase {
    adminFines?: GetLegalSearchDefaultApplicationJsonAdminFines[];
    adrs?: GetLegalSearchDefaultApplicationJsonAdrs[];
    advisoryOpinions?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinions[];
    murs?: GetLegalSearchDefaultApplicationJsonMurs[];
    regulations?: GetLegalSearchDefaultApplicationJsonRegulations[];
    statutes?: GetLegalSearchDefaultApplicationJsonStatutes[];
    totalAdminFines?: number;
    totalAdrs?: number;
    totalAdvisoryOpinions?: number;
    totalAll?: number;
    totalMurs?: number;
    totalRegulations?: number;
    totalStatutes?: number;
}
export declare class GetLegalSearchRequest extends SpeakeasyBase {
    queryParams: GetLegalSearchQueryParams;
}
export declare class GetLegalSearchResponse extends SpeakeasyBase {
    contentType: string;
    getLegalSearchDefaultApplicationJsonObject?: GetLegalSearchDefaultApplicationJson;
    statusCode: number;
}
