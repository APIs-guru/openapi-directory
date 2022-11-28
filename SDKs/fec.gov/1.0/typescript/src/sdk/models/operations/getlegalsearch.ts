import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLegalSearchAoCategoryEnum {
    F = "F",
    V = "V",
    D = "D",
    R = "R",
    W = "W",
    C = "C",
    S = "S"
}


export class GetLegalSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_committee_id" })
  afCommitteeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_fd_fine_amount" })
  afFdFineAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_max_fd_date" })
  afMaxFdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_max_rtb_date" })
  afMaxRtbDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_min_fd_date" })
  afMinFdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_min_rtb_date" })
  afMinRtbDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_name" })
  afName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_report_year" })
  afReportYear?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_rtb_fine_amount" })
  afRtbFineAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_category" })
  aoCategory?: GetLegalSearchAoCategoryEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_citation_require_all" })
  aoCitationRequireAll?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_entity_name" })
  aoEntityName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_is_pending" })
  aoIsPending?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_max_issue_date" })
  aoMaxIssueDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_max_request_date" })
  aoMaxRequestDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_min_issue_date" })
  aoMinIssueDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_min_request_date" })
  aoMinRequestDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_name" })
  aoName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_no" })
  aoNo?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_regulatory_citation" })
  aoRegulatoryCitation?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_requestor" })
  aoRequestor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_requestor_type" })
  aoRequestorType?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_status" })
  aoStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_statutory_citation" })
  aoStatutoryCitation?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_dispositions" })
  caseDispositions?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_document_category" })
  caseDocumentCategory?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_election_cycles" })
  caseElectionCycles?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_max_close_date" })
  caseMaxCloseDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_max_open_date" })
  caseMaxOpenDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_min_close_date" })
  caseMinCloseDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_min_open_date" })
  caseMinOpenDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_no" })
  caseNo?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_respondents" })
  caseRespondents?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_hit" })
  fromHit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hits_returned" })
  hitsReturned?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mur_type" })
  murType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=vote_date" })
  voteDate?: Date;
}


export class GetLegalSearchDefaultApplicationJsonAdminFinesDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document_date" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=document_id" })
  documentId?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdminFines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challenge_outcome" })
  challengeOutcome?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge_receipt_date" })
  challengeReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=check_amount" })
  checkAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=commission_votes", elemType: GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes })
  commissionVotes?: GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes[];

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=doc_id" })
  docId?: string;

  @SpeakeasyMetadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonAdminFinesDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonAdminFinesDocuments[];

  @SpeakeasyMetadata({ data: "json, name=final_determination_amount" })
  finalDeterminationAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=final_determination_date" })
  finalDeterminationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;

  @SpeakeasyMetadata({ data: "json, name=petition_court_decision_date" })
  petitionCourtDecisionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=petition_court_filing_date" })
  petitionCourtFilingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reason_to_believe_action_date" })
  reasonToBelieveActionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reason_to_believe_fine_amount" })
  reasonToBelieveFineAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: string;

  @SpeakeasyMetadata({ data: "json, name=treasury_referral_amount" })
  treasuryReferralAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=treasury_referral_date" })
  treasuryReferralDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=vote_date" })
  voteDate?: Date;
}


export class GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsDispositions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=citations", elemType: GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations })
  citations?: GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations[];

  @SpeakeasyMetadata({ data: "json, name=disposition" })
  disposition?: string;

  @SpeakeasyMetadata({ data: "json, name=penalty" })
  penalty?: number;

  @SpeakeasyMetadata({ data: "json, name=respondent" })
  respondent?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document_date" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=document_id" })
  documentId?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrsParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=citations" })
  citations?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdrs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commission_votes", elemType: GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes })
  commissionVotes?: GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes[];

  @SpeakeasyMetadata({ data: "json, name=dispositions", elemType: GetLegalSearchDefaultApplicationJsonAdrsDispositions })
  dispositions?: GetLegalSearchDefaultApplicationJsonAdrsDispositions[];

  @SpeakeasyMetadata({ data: "json, name=doc_id" })
  docId?: string;

  @SpeakeasyMetadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonAdrsDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonAdrsDocuments[];

  @SpeakeasyMetadata({ data: "json, name=election_cycles" })
  electionCycles?: number;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;

  @SpeakeasyMetadata({ data: "json, name=open_date" })
  openDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: GetLegalSearchDefaultApplicationJsonAdrsParticipants })
  participants?: GetLegalSearchDefaultApplicationJsonAdrsParticipants[];

  @SpeakeasyMetadata({ data: "json, name=respondents" })
  respondents?: string[];

  @SpeakeasyMetadata({ data: "json, name=subjects" })
  subjects?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document_id" })
  documentId?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=part" })
  part?: number;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: number;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: number;
}


export class GetLegalSearchDefaultApplicationJsonAdvisoryOpinions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ao_citations", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations })
  aoCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations[];

  @SpeakeasyMetadata({ data: "json, name=aos_cited_by", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy })
  aosCitedBy?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy[];

  @SpeakeasyMetadata({ data: "json, name=commenter_names" })
  commenterNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments[];

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities })
  entities?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities[];

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=is_pending" })
  isPending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issue_date" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;

  @SpeakeasyMetadata({ data: "json, name=regulatory_citations", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations })
  regulatoryCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations[];

  @SpeakeasyMetadata({ data: "json, name=representative_names" })
  representativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=request_date" })
  requestDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=requestor_names" })
  requestorNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=requestor_types" })
  requestorTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statutory_citations", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations })
  statutoryCitations?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}


export class GetLegalSearchDefaultApplicationJsonMursCommissionVotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=vote_date" })
  voteDate?: Date;
}


export class GetLegalSearchDefaultApplicationJsonMursDispositionsCitations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonMursDispositions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=citations", elemType: GetLegalSearchDefaultApplicationJsonMursDispositionsCitations })
  citations?: GetLegalSearchDefaultApplicationJsonMursDispositionsCitations[];

  @SpeakeasyMetadata({ data: "json, name=disposition" })
  disposition?: string;

  @SpeakeasyMetadata({ data: "json, name=penalty" })
  penalty?: number;

  @SpeakeasyMetadata({ data: "json, name=respondent" })
  respondent?: string;
}


export class GetLegalSearchDefaultApplicationJsonMursDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document_date" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=document_id" })
  documentId?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum GetLegalSearchDefaultApplicationJsonMursMurTypeEnum {
    Current = "current",
    Archived = "archived"
}


export class GetLegalSearchDefaultApplicationJsonMursParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=citations" })
  citations?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}


export class GetLegalSearchDefaultApplicationJsonMurs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commission_votes", elemType: GetLegalSearchDefaultApplicationJsonMursCommissionVotes })
  commissionVotes?: GetLegalSearchDefaultApplicationJsonMursCommissionVotes[];

  @SpeakeasyMetadata({ data: "json, name=dispositions", elemType: GetLegalSearchDefaultApplicationJsonMursDispositions })
  dispositions?: GetLegalSearchDefaultApplicationJsonMursDispositions[];

  @SpeakeasyMetadata({ data: "json, name=doc_id" })
  docId?: string;

  @SpeakeasyMetadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonMursDocuments })
  documents?: GetLegalSearchDefaultApplicationJsonMursDocuments[];

  @SpeakeasyMetadata({ data: "json, name=election_cycles" })
  electionCycles?: number;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=mur_type" })
  murType?: GetLegalSearchDefaultApplicationJsonMursMurTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;

  @SpeakeasyMetadata({ data: "json, name=open_date" })
  openDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: GetLegalSearchDefaultApplicationJsonMursParticipants })
  participants?: GetLegalSearchDefaultApplicationJsonMursParticipants[];

  @SpeakeasyMetadata({ data: "json, name=respondents" })
  respondents?: string[];

  @SpeakeasyMetadata({ data: "json, name=subjects" })
  subjects?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonRegulations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doc_id" })
  docId?: string;

  @SpeakeasyMetadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJsonStatutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chapter" })
  chapter?: string;

  @SpeakeasyMetadata({ data: "json, name=doc_id" })
  docId?: string;

  @SpeakeasyMetadata({ data: "json, name=document_highlights" })
  documentHighlights?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=no" })
  no?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLegalSearchDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_fines", elemType: GetLegalSearchDefaultApplicationJsonAdminFines })
  adminFines?: GetLegalSearchDefaultApplicationJsonAdminFines[];

  @SpeakeasyMetadata({ data: "json, name=adrs", elemType: GetLegalSearchDefaultApplicationJsonAdrs })
  adrs?: GetLegalSearchDefaultApplicationJsonAdrs[];

  @SpeakeasyMetadata({ data: "json, name=advisory_opinions", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinions })
  advisoryOpinions?: GetLegalSearchDefaultApplicationJsonAdvisoryOpinions[];

  @SpeakeasyMetadata({ data: "json, name=murs", elemType: GetLegalSearchDefaultApplicationJsonMurs })
  murs?: GetLegalSearchDefaultApplicationJsonMurs[];

  @SpeakeasyMetadata({ data: "json, name=regulations", elemType: GetLegalSearchDefaultApplicationJsonRegulations })
  regulations?: GetLegalSearchDefaultApplicationJsonRegulations[];

  @SpeakeasyMetadata({ data: "json, name=statutes", elemType: GetLegalSearchDefaultApplicationJsonStatutes })
  statutes?: GetLegalSearchDefaultApplicationJsonStatutes[];

  @SpeakeasyMetadata({ data: "json, name=total_admin_fines" })
  totalAdminFines?: number;

  @SpeakeasyMetadata({ data: "json, name=total_adrs" })
  totalAdrs?: number;

  @SpeakeasyMetadata({ data: "json, name=total_advisory_opinions" })
  totalAdvisoryOpinions?: number;

  @SpeakeasyMetadata({ data: "json, name=total_all" })
  totalAll?: number;

  @SpeakeasyMetadata({ data: "json, name=total_murs" })
  totalMurs?: number;

  @SpeakeasyMetadata({ data: "json, name=total_regulations" })
  totalRegulations?: number;

  @SpeakeasyMetadata({ data: "json, name=total_statutes" })
  totalStatutes?: number;
}


export class GetLegalSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLegalSearchQueryParams;
}


export class GetLegalSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLegalSearchDefaultApplicationJsonObject?: GetLegalSearchDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
