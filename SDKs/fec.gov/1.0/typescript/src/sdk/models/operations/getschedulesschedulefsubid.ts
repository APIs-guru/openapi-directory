import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesScheduleFSubIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sub_id" })
  subId: string;
}


export class GetSchedulesScheduleFSubIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSchedulesScheduleFSubIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchedulesScheduleFSubIdPathParams;

  @Metadata()
  queryParams: GetSchedulesScheduleFSubIdQueryParams;
}


export class GetSchedulesScheduleFSubIdDefaultApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_code" })
  actionCode?: string;

  @Metadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

  @Metadata({ data: "json, name=aggregate_general_election_expenditure" })
  aggregateGeneralElectionExpenditure?: string;

  @Metadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @Metadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @Metadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @Metadata({ data: "json, name=candidate_middle_name" })
  candidateMiddleName?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @Metadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @Metadata({ data: "json, name=candidate_office_full" })
  candidateOfficeFull?: string;

  @Metadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @Metadata({ data: "json, name=candidate_office_state_full" })
  candidateOfficeStateFull?: string;

  @Metadata({ data: "json, name=candidate_prefix" })
  candidatePrefix?: string;

  @Metadata({ data: "json, name=candidate_suffix" })
  candidateSuffix?: string;

  @Metadata({ data: "json, name=catolog_code" })
  catologCode?: string;

  @Metadata({ data: "json, name=catolog_code_full" })
  catologCodeFull?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: shared.CommitteeHistory;

  @Metadata({ data: "json, name=committee_designated_coordinated_expenditure_indicator" })
  committeeDesignatedCoordinatedExpenditureIndicator?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

  @Metadata({ data: "json, name=conduit_committee_id" })
  conduitCommitteeId?: string;

  @Metadata({ data: "json, name=conduit_committee_name" })
  conduitCommitteeName?: string;

  @Metadata({ data: "json, name=conduit_committee_state" })
  conduitCommitteeState?: string;

  @Metadata({ data: "json, name=conduit_committee_street1" })
  conduitCommitteeStreet1?: string;

  @Metadata({ data: "json, name=conduit_committee_street2" })
  conduitCommitteeStreet2?: string;

  @Metadata({ data: "json, name=conduit_committee_zip" })
  conduitCommitteeZip?: number;

  @Metadata({ data: "json, name=designated_committee_id" })
  designatedCommitteeId?: string;

  @Metadata({ data: "json, name=designated_committee_name" })
  designatedCommitteeName?: string;

  @Metadata({ data: "json, name=election_cycle" })
  electionCycle?: number;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

  @Metadata({ data: "json, name=entity_type_desc" })
  entityTypeDesc?: string;

  @Metadata({ data: "json, name=expenditure_amount" })
  expenditureAmount?: number;

  @Metadata({ data: "json, name=expenditure_date" })
  expenditureDate?: Date;

  @Metadata({ data: "json, name=expenditure_purpose_full" })
  expenditurePurposeFull?: string;

  @Metadata({ data: "json, name=expenditure_type" })
  expenditureType?: string;

  @Metadata({ data: "json, name=expenditure_type_full" })
  expenditureTypeFull?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "json, name=link_id" })
  linkId?: number;

  @Metadata({ data: "json, name=load_date" })
  loadDate?: Date;

  @Metadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @Metadata({ data: "json, name=memo_code_full" })
  memoCodeFull?: string;

  @Metadata({ data: "json, name=memo_text" })
  memoText?: string;

  @Metadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @Metadata({ data: "json, name=payee_first_name" })
  payeeFirstName?: string;

  @Metadata({ data: "json, name=payee_last_name" })
  payeeLastName?: string;

  @Metadata({ data: "json, name=payee_middle_name" })
  payeeMiddleName?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @Metadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: string;

  @Metadata({ data: "json, name=subordinate_committee" })
  subordinateCommittee?: shared.CommitteeHistory;

  @Metadata({ data: "json, name=subordinate_committee_id" })
  subordinateCommitteeId?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @Metadata({ data: "json, name=unlimited_spending_flag" })
  unlimitedSpendingFlag?: string;

  @Metadata({ data: "json, name=unlimited_spending_flag_full" })
  unlimitedSpendingFlagFull?: string;
}


export class GetSchedulesScheduleFSubIdDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: operations.GetSchedulesScheduleFSubIdDefaultApplicationJsonResults })
  results?: GetSchedulesScheduleFSubIdDefaultApplicationJsonResults[];
}


export class GetSchedulesScheduleFSubIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSchedulesScheduleFSubIdDefaultApplicationJsonObject?: GetSchedulesScheduleFSubIdDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
