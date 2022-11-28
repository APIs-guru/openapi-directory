import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulesScheduleCQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_name" })
  candidateName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" })
  lastIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loan_source_name" })
  loanSourceName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_incurred_date" })
  maxIncurredDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_payment_to_date" })
  maxPaymentToDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_incurred_date" })
  minIncurredDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_payment_to_date" })
  minPaymentToDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetSchedulesScheduleCDefaultApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_code" })
  actionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

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

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: shared.CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=due_date_terms" })
  dueDateTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=election_type" })
  electionType?: string;

  @SpeakeasyMetadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type_full" })
  entityTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_committee_id" })
  fecCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_election_type_full" })
  fecElectionTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_election_type_year" })
  fecElectionTypeYear?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @SpeakeasyMetadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=incurred_date" })
  incurredDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=interest_rate_terms" })
  interestRateTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=link_id" })
  linkId?: number;

  @SpeakeasyMetadata({ data: "json, name=load_date" })
  loadDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=loan_balance" })
  loanBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_source_city" })
  loanSourceCity?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_first_name" })
  loanSourceFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_last_name" })
  loanSourceLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_middle_name" })
  loanSourceMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_name" })
  loanSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_prefix" })
  loanSourcePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_state" })
  loanSourceState?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_street_1" })
  loanSourceStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_street_2" })
  loanSourceStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_suffix" })
  loanSourceSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=loan_source_zip" })
  loanSourceZip?: number;

  @SpeakeasyMetadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=memo_text" })
  memoText?: string;

  @SpeakeasyMetadata({ data: "json, name=original_loan_amount" })
  originalLoanAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @SpeakeasyMetadata({ data: "json, name=payment_to_date" })
  paymentToDate?: number;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=personally_funded" })
  personallyFunded?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule_a_line_number" })
  scheduleALineNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=secured_ind" })
  securedInd?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}


export class GetSchedulesScheduleCDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleCDefaultApplicationJsonResults })
  results?: GetSchedulesScheduleCDefaultApplicationJsonResults[];
}


export class GetSchedulesScheduleCRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleCQueryParams;
}


export class GetSchedulesScheduleCResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSchedulesScheduleCDefaultApplicationJsonObject?: GetSchedulesScheduleCDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
