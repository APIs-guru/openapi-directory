import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulesScheduleDSubIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sub_id" })
  subId: string;
}


export class GetSchedulesScheduleDSubIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

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


export class GetSchedulesScheduleDSubIdDefaultApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_code" })
  actionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=amount_incurred_period" })
  amountIncurredPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" })
  candidateOfficeStateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=canidate_name" })
  canidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: shared.CommitteeHistory;

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

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_city" })
  creditorDebtorCity?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_first_name" })
  creditorDebtorFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_id" })
  creditorDebtorId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_last_name" })
  creditorDebtorLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_middle_name" })
  creditorDebtorMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_name" })
  creditorDebtorName?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_prefix" })
  creditorDebtorPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_state" })
  creditorDebtorState?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_street1" })
  creditorDebtorStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_street2" })
  creditorDebtorStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=creditor_debtor_suffix" })
  creditorDebtorSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=election_cycle" })
  electionCycle?: number;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

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

  @SpeakeasyMetadata({ data: "json, name=nature_of_debt" })
  natureOfDebt?: string;

  @SpeakeasyMetadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @SpeakeasyMetadata({ data: "json, name=outstanding_balance_beginning_of_period" })
  outstandingBalanceBeginningOfPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=outstanding_balance_close_of_period" })
  outstandingBalanceCloseOfPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=payment_period" })
  paymentPeriod?: number;

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

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}


export class GetSchedulesScheduleDSubIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleDSubIdDefaultApplicationJsonResults })
  results?: GetSchedulesScheduleDSubIdDefaultApplicationJsonResults[];
}


export class GetSchedulesScheduleDSubIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchedulesScheduleDSubIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleDSubIdQueryParams;
}


export class GetSchedulesScheduleDSubIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSchedulesScheduleDSubIdDefaultApplicationJsonObject?: GetSchedulesScheduleDSubIdDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
