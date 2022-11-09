import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesScheduleCQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_name" })
  candidateName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_index" })
  lastIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=loan_source_name" })
  loanSourceName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_incurred_date" })
  maxIncurredDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_payment_to_date" })
  maxPaymentToDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_incurred_date" })
  minIncurredDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_payment_to_date" })
  minPaymentToDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetSchedulesScheduleCRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleCQueryParams;
}


export class GetSchedulesScheduleCDefaultApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_code" })
  actionCode?: string;

  @Metadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

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

  @Metadata({ data: "json, name=committee" })
  committee?: shared.CommitteeHistory;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=due_date_terms" })
  dueDateTerms?: string;

  @Metadata({ data: "json, name=election_type" })
  electionType?: string;

  @Metadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

  @Metadata({ data: "json, name=entity_type_full" })
  entityTypeFull?: string;

  @Metadata({ data: "json, name=fec_committee_id" })
  fecCommitteeId?: string;

  @Metadata({ data: "json, name=fec_election_type_full" })
  fecElectionTypeFull?: string;

  @Metadata({ data: "json, name=fec_election_type_year" })
  fecElectionTypeYear?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=incurred_date" })
  incurredDate?: Date;

  @Metadata({ data: "json, name=interest_rate_terms" })
  interestRateTerms?: string;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "json, name=link_id" })
  linkId?: number;

  @Metadata({ data: "json, name=load_date" })
  loadDate?: Date;

  @Metadata({ data: "json, name=loan_balance" })
  loanBalance?: number;

  @Metadata({ data: "json, name=loan_source_city" })
  loanSourceCity?: string;

  @Metadata({ data: "json, name=loan_source_first_name" })
  loanSourceFirstName?: string;

  @Metadata({ data: "json, name=loan_source_last_name" })
  loanSourceLastName?: string;

  @Metadata({ data: "json, name=loan_source_middle_name" })
  loanSourceMiddleName?: string;

  @Metadata({ data: "json, name=loan_source_name" })
  loanSourceName?: string;

  @Metadata({ data: "json, name=loan_source_prefix" })
  loanSourcePrefix?: string;

  @Metadata({ data: "json, name=loan_source_state" })
  loanSourceState?: string;

  @Metadata({ data: "json, name=loan_source_street_1" })
  loanSourceStreet1?: string;

  @Metadata({ data: "json, name=loan_source_street_2" })
  loanSourceStreet2?: string;

  @Metadata({ data: "json, name=loan_source_suffix" })
  loanSourceSuffix?: string;

  @Metadata({ data: "json, name=loan_source_zip" })
  loanSourceZip?: number;

  @Metadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @Metadata({ data: "json, name=memo_text" })
  memoText?: string;

  @Metadata({ data: "json, name=original_loan_amount" })
  originalLoanAmount?: number;

  @Metadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @Metadata({ data: "json, name=payment_to_date" })
  paymentToDate?: number;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=personally_funded" })
  personallyFunded?: string;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=schedule_a_line_number" })
  scheduleALineNumber?: number;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @Metadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @Metadata({ data: "json, name=secured_ind" })
  securedInd?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}


export class GetSchedulesScheduleCDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: operations.GetSchedulesScheduleCDefaultApplicationJsonResults })
  results?: GetSchedulesScheduleCDefaultApplicationJsonResults[];
}


export class GetSchedulesScheduleCResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSchedulesScheduleCDefaultApplicationJsonObject?: GetSchedulesScheduleCDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
