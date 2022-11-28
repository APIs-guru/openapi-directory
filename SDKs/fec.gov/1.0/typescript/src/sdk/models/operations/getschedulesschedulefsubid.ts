import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulesScheduleFSubIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sub_id" })
  subId: string;
}


export class GetSchedulesScheduleFSubIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSchedulesScheduleFSubIdDefaultApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_code" })
  actionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=aggregate_general_election_expenditure" })
  aggregateGeneralElectionExpenditure?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_middle_name" })
  candidateMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_full" })
  candidateOfficeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" })
  candidateOfficeStateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_prefix" })
  candidatePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_suffix" })
  candidateSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=catolog_code" })
  catologCode?: string;

  @SpeakeasyMetadata({ data: "json, name=catolog_code_full" })
  catologCodeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: shared.CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=committee_designated_coordinated_expenditure_indicator" })
  committeeDesignatedCoordinatedExpenditureIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_id" })
  conduitCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_name" })
  conduitCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_state" })
  conduitCommitteeState?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" })
  conduitCommitteeStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" })
  conduitCommitteeStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" })
  conduitCommitteeZip?: number;

  @SpeakeasyMetadata({ data: "json, name=designated_committee_id" })
  designatedCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=designated_committee_name" })
  designatedCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=election_cycle" })
  electionCycle?: number;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type_desc" })
  entityTypeDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=expenditure_amount" })
  expenditureAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=expenditure_date" })
  expenditureDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expenditure_purpose_full" })
  expenditurePurposeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=expenditure_type" })
  expenditureType?: string;

  @SpeakeasyMetadata({ data: "json, name=expenditure_type_full" })
  expenditureTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @SpeakeasyMetadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=link_id" })
  linkId?: number;

  @SpeakeasyMetadata({ data: "json, name=load_date" })
  loadDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=memo_code_full" })
  memoCodeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=memo_text" })
  memoText?: string;

  @SpeakeasyMetadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @SpeakeasyMetadata({ data: "json, name=payee_first_name" })
  payeeFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_last_name" })
  payeeLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_middle_name" })
  payeeMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: string;

  @SpeakeasyMetadata({ data: "json, name=subordinate_committee" })
  subordinateCommittee?: shared.CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=subordinate_committee_id" })
  subordinateCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=unlimited_spending_flag" })
  unlimitedSpendingFlag?: string;

  @SpeakeasyMetadata({ data: "json, name=unlimited_spending_flag_full" })
  unlimitedSpendingFlagFull?: string;
}


export class GetSchedulesScheduleFSubIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleFSubIdDefaultApplicationJsonResults })
  results?: GetSchedulesScheduleFSubIdDefaultApplicationJsonResults[];
}


export class GetSchedulesScheduleFSubIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchedulesScheduleFSubIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleFSubIdQueryParams;
}


export class GetSchedulesScheduleFSubIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSchedulesScheduleFSubIdDefaultApplicationJsonObject?: GetSchedulesScheduleFSubIdDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
