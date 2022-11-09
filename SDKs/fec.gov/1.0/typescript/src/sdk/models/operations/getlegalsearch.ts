import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLegalSearchAoCategoryEnum {
    F = "F"
,    V = "V"
,    D = "D"
,    R = "R"
,    W = "W"
,    C = "C"
,    S = "S"
}


export class GetLegalSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=af_committee_id" })
  afCommitteeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_fd_fine_amount" })
  afFdFineAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_max_fd_date" })
  afMaxFdDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_max_rtb_date" })
  afMaxRtbDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_min_fd_date" })
  afMinFdDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_min_rtb_date" })
  afMinRtbDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_name" })
  afName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_report_year" })
  afReportYear?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=af_rtb_fine_amount" })
  afRtbFineAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_category" })
  aoCategory?: GetLegalSearchAoCategoryEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_citation_require_all" })
  aoCitationRequireAll?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_entity_name" })
  aoEntityName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_is_pending" })
  aoIsPending?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_max_issue_date" })
  aoMaxIssueDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_max_request_date" })
  aoMaxRequestDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_min_issue_date" })
  aoMinIssueDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_min_request_date" })
  aoMinRequestDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_name" })
  aoName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_no" })
  aoNo?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_regulatory_citation" })
  aoRegulatoryCitation?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_requestor" })
  aoRequestor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_requestor_type" })
  aoRequestorType?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_status" })
  aoStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ao_statutory_citation" })
  aoStatutoryCitation?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_dispositions" })
  caseDispositions?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_document_category" })
  caseDocumentCategory?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_election_cycles" })
  caseElectionCycles?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_max_close_date" })
  caseMaxCloseDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_max_open_date" })
  caseMaxOpenDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_min_close_date" })
  caseMinCloseDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_min_open_date" })
  caseMinOpenDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_no" })
  caseNo?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=case_respondents" })
  caseRespondents?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from_hit" })
  fromHit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hits_returned" })
  hitsReturned?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mur_type" })
  murType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetLegalSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLegalSearchQueryParams;
}


export class GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=vote_date" })
  voteDate?: Date;
}


export class GetLegalSearchDefaultApplicationJsonAdminFinesDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document_date" })
  documentDate?: Date;

  @Metadata({ data: "json, name=document_id" })
  documentId?: number;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdminFines extends SpeakeasyBase {
  @Metadata({ data: "json, name=challenge_outcome" })
  challengeOutcome?: string;

  @Metadata({ data: "json, name=challenge_receipt_date" })
  challengeReceiptDate?: Date;

  @Metadata({ data: "json, name=check_amount" })
  checkAmount?: number;

  @Metadata({ data: "json, name=commission_votes", elemType: operations.GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes })
  commissionVotes?: GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes[];

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=doc_id" })
  docId?: string;

  @Metadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @Metadata({ data: "json, name=documents", elemType: operations.GetLegalSearchDefaultApplicationJsonAdminFinesDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonAdminFinesDocuments[];

  @Metadata({ data: "json, name=final_determination_amount" })
  finalDeterminationAmount?: number;

  @Metadata({ data: "json, name=final_determination_date" })
  finalDeterminationDate?: Date;

  @Metadata({ data: "json, name=highlights" })
  highlights?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;

  @Metadata({ data: "json, name=petition_court_decision_date" })
  petitionCourtDecisionDate?: Date;

  @Metadata({ data: "json, name=petition_court_filing_date" })
  petitionCourtFilingDate?: Date;

  @Metadata({ data: "json, name=reason_to_believe_action_date" })
  reasonToBelieveActionDate?: Date;

  @Metadata({ data: "json, name=reason_to_believe_fine_amount" })
  reasonToBelieveFineAmount?: number;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: string;

  @Metadata({ data: "json, name=treasury_referral_amount" })
  treasuryReferralAmount?: number;

  @Metadata({ data: "json, name=treasury_referral_date" })
  treasuryReferralDate?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=vote_date" })
  voteDate?: Date;
}


export class GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsDispositions extends SpeakeasyBase {
  @Metadata({ data: "json, name=citations", elemType: operations.GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations })
  citations?: GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations[];

  @Metadata({ data: "json, name=disposition" })
  disposition?: string;

  @Metadata({ data: "json, name=penalty" })
  penalty?: number;

  @Metadata({ data: "json, name=respondent" })
  respondent?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document_date" })
  documentDate?: Date;

  @Metadata({ data: "json, name=document_id" })
  documentId?: number;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsParticipants extends SpeakeasyBase {
  @Metadata({ data: "json, name=citations" })
  citations?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrs extends SpeakeasyBase {
  @Metadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @Metadata({ data: "json, name=commission_votes", elemType: operations.GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes })
  commissionVotes?: GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes[];

  @Metadata({ data: "json, name=dispositions", elemType: operations.GetLegalSearchDefaultApplicationJsonAdrsDispositions })
  dispositions?: GetLegalSearchDefaultApplicationJsonAdrsDispositions[];

  @Metadata({ data: "json, name=doc_id" })
  docId?: string;

  @Metadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @Metadata({ data: "json, name=documents", elemType: operations.GetLegalSearchDefaultApplicationJsonAdrsDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonAdrsDocuments[];

  @Metadata({ data: "json, name=election_cycles" })
  electionCycles?: number;

  @Metadata({ data: "json, name=highlights" })
  highlights?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;

  @Metadata({ data: "json, name=open_date" })
  openDate?: Date;

  @Metadata({ data: "json, name=participants", elemType: operations.GetLegalSearchDefaultApplicationJsonAdrsParticipants })
  participants?: GetLegalSearchDefaultApplicationJsonAdrsParticipants[];

  @Metadata({ data: "json, name=respondents" })
  respondents?: string[];

  @Metadata({ data: "json, name=subjects" })
  subjects?: string[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document_id" })
  documentId?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations extends SpeakeasyBase {
  @Metadata({ data: "json, name=part" })
  part?: number;

  @Metadata({ data: "json, name=section" })
  section?: number;

  @Metadata({ data: "json, name=title" })
  title?: number;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations extends SpeakeasyBase {
  @Metadata({ data: "json, name=section" })
  section?: string;

  @Metadata({ data: "json, name=title" })
  title?: number;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ao_citations", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations })
  aoCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations[];

  @Metadata({ data: "json, name=aos_cited_by", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy })
  aosCitedBy?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy[];

  @Metadata({ data: "json, name=commenter_names" })
  commenterNames?: string[];

  @Metadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @Metadata({ data: "json, name=documents", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments[];

  @Metadata({ data: "json, name=entities", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities })
  entities?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities[];

  @Metadata({ data: "json, name=highlights" })
  highlights?: string[];

  @Metadata({ data: "json, name=is_pending" })
  isPending?: boolean;

  @Metadata({ data: "json, name=issue_date" })
  issueDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;

  @Metadata({ data: "json, name=regulatory_citations", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations })
  regulatoryCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations[];

  @Metadata({ data: "json, name=representative_names" })
  representativeNames?: string[];

  @Metadata({ data: "json, name=request_date" })
  requestDate?: Date;

  @Metadata({ data: "json, name=requestor_names" })
  requestorNames?: string[];

  @Metadata({ data: "json, name=requestor_types" })
  requestorTypes?: string[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statutory_citations", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations })
  statutoryCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations[];

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}


export class GetLegalSearchDefaultApplicationJsonMursCommissionVotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=vote_date" })
  voteDate?: Date;
}


export class GetLegalSearchDefaultApplicationJsonMursDispositionsCitations extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonMursDispositions extends SpeakeasyBase {
  @Metadata({ data: "json, name=citations", elemType: operations.GetLegalSearchDefaultApplicationJsonMursDispositionsCitations })
  citations?: GetLegalSearchDefaultApplicationJsonMursDispositionsCitations[];

  @Metadata({ data: "json, name=disposition" })
  disposition?: string;

  @Metadata({ data: "json, name=penalty" })
  penalty?: number;

  @Metadata({ data: "json, name=respondent" })
  respondent?: string;
}


export class GetLegalSearchDefaultApplicationJsonMursDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document_date" })
  documentDate?: Date;

  @Metadata({ data: "json, name=document_id" })
  documentId?: number;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum GetLegalSearchDefaultApplicationJsonMursMurTypeEnum {
    Current = "current"
,    Archived = "archived"
}


export class GetLegalSearchDefaultApplicationJsonMursParticipants extends SpeakeasyBase {
  @Metadata({ data: "json, name=citations" })
  citations?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}


export class GetLegalSearchDefaultApplicationJsonMurs extends SpeakeasyBase {
  @Metadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @Metadata({ data: "json, name=commission_votes", elemType: operations.GetLegalSearchDefaultApplicationJsonMursCommissionVotes })
  commissionVotes?: GetLegalSearchDefaultApplicationJsonMursCommissionVotes[];

  @Metadata({ data: "json, name=dispositions", elemType: operations.GetLegalSearchDefaultApplicationJsonMursDispositions })
  dispositions?: GetLegalSearchDefaultApplicationJsonMursDispositions[];

  @Metadata({ data: "json, name=doc_id" })
  docId?: string;

  @Metadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @Metadata({ data: "json, name=documents", elemType: operations.GetLegalSearchDefaultApplicationJsonMursDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonMursDocuments[];

  @Metadata({ data: "json, name=election_cycles" })
  electionCycles?: number;

  @Metadata({ data: "json, name=highlights" })
  highlights?: string[];

  @Metadata({ data: "json, name=mur_type" })
  murType?: GetLegalSearchDefaultApplicationJsonMursMurTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;

  @Metadata({ data: "json, name=open_date" })
  openDate?: Date;

  @Metadata({ data: "json, name=participants", elemType: operations.GetLegalSearchDefaultApplicationJsonMursParticipants })
  participants?: GetLegalSearchDefaultApplicationJsonMursParticipants[];

  @Metadata({ data: "json, name=respondents" })
  respondents?: string[];

  @Metadata({ data: "json, name=subjects" })
  subjects?: string[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonRegulations extends SpeakeasyBase {
  @Metadata({ data: "json, name=doc_id" })
  docId?: string;

  @Metadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @Metadata({ data: "json, name=highlights" })
  highlights?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonStatutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=chapter" })
  chapter?: string;

  @Metadata({ data: "json, name=doc_id" })
  docId?: string;

  @Metadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @Metadata({ data: "json, name=highlights" })
  highlights?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=no" })
  no?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_fines", elemType: operations.GetLegalSearchDefaultApplicationJsonAdminFines })
  adminFines?: GetLegalSearchDefaultApplicationJsonAdminFines[];

  @Metadata({ data: "json, name=adrs", elemType: operations.GetLegalSearchDefaultApplicationJsonAdrs })
  adrs?: GetLegalSearchDefaultApplicationJsonAdrs[];

  @Metadata({ data: "json, name=advisory_opinions", elemType: operations.GetLegalSearchDefaultApplicationJsonAdvisoryOpinions })
  advisoryOpinions?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinions[];

  @Metadata({ data: "json, name=murs", elemType: operations.GetLegalSearchDefaultApplicationJsonMurs })
  murs?: GetLegalSearchDefaultApplicationJsonMurs[];

  @Metadata({ data: "json, name=regulations", elemType: operations.GetLegalSearchDefaultApplicationJsonRegulations })
  regulations?: GetLegalSearchDefaultApplicationJsonRegulations[];

  @Metadata({ data: "json, name=statutes", elemType: operations.GetLegalSearchDefaultApplicationJsonStatutes })
  statutes?: GetLegalSearchDefaultApplicationJsonStatutes[];

  @Metadata({ data: "json, name=total_admin_fines" })
  totalAdminFines?: number;

  @Metadata({ data: "json, name=total_adrs" })
  totalAdrs?: number;

  @Metadata({ data: "json, name=total_advisory_opinions" })
  totalAdvisoryOpinions?: number;

  @Metadata({ data: "json, name=total_all" })
  totalAll?: number;

  @Metadata({ data: "json, name=total_murs" })
  totalMurs?: number;

  @Metadata({ data: "json, name=total_regulations" })
  totalRegulations?: number;

  @Metadata({ data: "json, name=total_statutes" })
  totalStatutes?: number;
}


export class GetLegalSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLegalSearchDefaultApplicationJsonObject?: GetLegalSearchDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
