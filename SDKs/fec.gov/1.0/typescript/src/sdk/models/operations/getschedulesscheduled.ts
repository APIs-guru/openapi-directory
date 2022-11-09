import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesScheduleDQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=creditor_debtor_name" })
  creditorDebtorName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount_incurred" })
  maxAmountIncurred?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount_outstanding_beginning" })
  maxAmountOutstandingBeginning?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount_outstanding_close" })
  maxAmountOutstandingClose?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_payment_period" })
  maxPaymentPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount_incurred" })
  minAmountIncurred?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount_outstanding_beginning" })
  minAmountOutstandingBeginning?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount_outstanding_close" })
  minAmountOutstandingClose?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_payment_period" })
  minPaymentPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nature_of_debt" })
  natureOfDebt?: string;

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


export class GetSchedulesScheduleDRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleDQueryParams;
}


export class GetSchedulesScheduleDDefaultApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_code" })
  actionCode?: string;

  @Metadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

  @Metadata({ data: "json, name=amount_incurred_period" })
  amountIncurredPeriod?: number;

  @Metadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @Metadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @Metadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @Metadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @Metadata({ data: "json, name=candidate_office_state_full" })
  candidateOfficeStateFull?: string;

  @Metadata({ data: "json, name=canidate_name" })
  canidateName?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: shared.CommitteeHistory;

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

  @Metadata({ data: "json, name=creditor_debtor_city" })
  creditorDebtorCity?: string;

  @Metadata({ data: "json, name=creditor_debtor_first_name" })
  creditorDebtorFirstName?: string;

  @Metadata({ data: "json, name=creditor_debtor_id" })
  creditorDebtorId?: string;

  @Metadata({ data: "json, name=creditor_debtor_last_name" })
  creditorDebtorLastName?: string;

  @Metadata({ data: "json, name=creditor_debtor_middle_name" })
  creditorDebtorMiddleName?: string;

  @Metadata({ data: "json, name=creditor_debtor_name" })
  creditorDebtorName?: string;

  @Metadata({ data: "json, name=creditor_debtor_prefix" })
  creditorDebtorPrefix?: string;

  @Metadata({ data: "json, name=creditor_debtor_state" })
  creditorDebtorState?: string;

  @Metadata({ data: "json, name=creditor_debtor_street1" })
  creditorDebtorStreet1?: string;

  @Metadata({ data: "json, name=creditor_debtor_street2" })
  creditorDebtorStreet2?: string;

  @Metadata({ data: "json, name=creditor_debtor_suffix" })
  creditorDebtorSuffix?: string;

  @Metadata({ data: "json, name=election_cycle" })
  electionCycle?: number;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

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

  @Metadata({ data: "json, name=nature_of_debt" })
  natureOfDebt?: string;

  @Metadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @Metadata({ data: "json, name=outstanding_balance_beginning_of_period" })
  outstandingBalanceBeginningOfPeriod?: number;

  @Metadata({ data: "json, name=outstanding_balance_close_of_period" })
  outstandingBalanceCloseOfPeriod?: number;

  @Metadata({ data: "json, name=payment_period" })
  paymentPeriod?: number;

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

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}


export class GetSchedulesScheduleDDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: operations.GetSchedulesScheduleDDefaultApplicationJsonResults })
  results?: GetSchedulesScheduleDDefaultApplicationJsonResults[];
}


export class GetSchedulesScheduleDResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSchedulesScheduleDDefaultApplicationJsonObject?: GetSchedulesScheduleDDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
