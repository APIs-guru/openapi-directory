import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";



export class ScheduleB extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=amendment_indicator_desc" })
  amendmentIndicatorDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_schedule_id" })
  backReferenceScheduleId?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=beneficiary_committee_name" })
  beneficiaryCommitteeName?: string;

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

  @SpeakeasyMetadata({ data: "json, name=candidate_office_description" })
  candidateOfficeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" })
  candidateOfficeStateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_prefix" })
  candidatePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_suffix" })
  candidateSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=category_code" })
  categoryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=category_code_full" })
  categoryCodeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=comm_dt" })
  commDt?: Date;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

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

  @SpeakeasyMetadata({ data: "json, name=disbursement_amount" })
  disbursementAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=disbursement_date" })
  disbursementDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=disbursement_description" })
  disbursementDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursement_purpose_category" })
  disbursementPurposeCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursement_type" })
  disbursementType?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursement_type_description" })
  disbursementTypeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=election_type" })
  electionType?: string;

  @SpeakeasyMetadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type_desc" })
  entityTypeDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_election_type_desc" })
  fecElectionTypeDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_election_year" })
  fecElectionYear?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @SpeakeasyMetadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=line_number_label" })
  lineNumberLabel?: string;

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

  @SpeakeasyMetadata({ data: "json, name=memoed_subtotal" })
  memoedSubtotal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=national_committee_nonfederal_account" })
  nationalCommitteeNonfederalAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=original_sub_id" })
  originalSubId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_employer" })
  payeeEmployer?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_first_name" })
  payeeFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_last_name" })
  payeeLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_middle_name" })
  payeeMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_occupation" })
  payeeOccupation?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_prefix" })
  payeePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_suffix" })
  payeeSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_city" })
  recipientCity?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_committee" })
  recipientCommittee?: CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=recipient_committee_id" })
  recipientCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_name" })
  recipientName?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_state" })
  recipientState?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_zip" })
  recipientZip?: string;

  @SpeakeasyMetadata({ data: "json, name=ref_disp_excess_flg" })
  refDispExcessFlg?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=semi_annual_bundled_refund" })
  semiAnnualBundledRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=spender_committee_designation" })
  spenderCommitteeDesignation?: string;

  @SpeakeasyMetadata({ data: "json, name=spender_committee_org_type" })
  spenderCommitteeOrgType?: string;

  @SpeakeasyMetadata({ data: "json, name=spender_committee_type" })
  spenderCommitteeType?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=unused_recipient_committee_id" })
  unusedRecipientCommitteeId?: string;
}
