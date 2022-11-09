import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHistory } from "./committeehistory";
import { CommitteeHistory } from "./committeehistory";


export class ScheduleB extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=amendment_indicator_desc" })
  amendmentIndicatorDesc?: string;

  @Metadata({ data: "json, name=back_reference_schedule_id" })
  backReferenceScheduleId?: string;

  @Metadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @Metadata({ data: "json, name=beneficiary_committee_name" })
  beneficiaryCommitteeName?: string;

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

  @Metadata({ data: "json, name=candidate_office_description" })
  candidateOfficeDescription?: string;

  @Metadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @Metadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @Metadata({ data: "json, name=candidate_office_state_full" })
  candidateOfficeStateFull?: string;

  @Metadata({ data: "json, name=candidate_prefix" })
  candidatePrefix?: string;

  @Metadata({ data: "json, name=candidate_suffix" })
  candidateSuffix?: string;

  @Metadata({ data: "json, name=category_code" })
  categoryCode?: string;

  @Metadata({ data: "json, name=category_code_full" })
  categoryCodeFull?: string;

  @Metadata({ data: "json, name=comm_dt" })
  commDt?: Date;

  @Metadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

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

  @Metadata({ data: "json, name=disbursement_amount" })
  disbursementAmount?: number;

  @Metadata({ data: "json, name=disbursement_date" })
  disbursementDate?: Date;

  @Metadata({ data: "json, name=disbursement_description" })
  disbursementDescription?: string;

  @Metadata({ data: "json, name=disbursement_purpose_category" })
  disbursementPurposeCategory?: string;

  @Metadata({ data: "json, name=disbursement_type" })
  disbursementType?: string;

  @Metadata({ data: "json, name=disbursement_type_description" })
  disbursementTypeDescription?: string;

  @Metadata({ data: "json, name=election_type" })
  electionType?: string;

  @Metadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

  @Metadata({ data: "json, name=entity_type_desc" })
  entityTypeDesc?: string;

  @Metadata({ data: "json, name=fec_election_type_desc" })
  fecElectionTypeDesc?: string;

  @Metadata({ data: "json, name=fec_election_year" })
  fecElectionYear?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "json, name=line_number_label" })
  lineNumberLabel?: string;

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

  @Metadata({ data: "json, name=memoed_subtotal" })
  memoedSubtotal?: boolean;

  @Metadata({ data: "json, name=national_committee_nonfederal_account" })
  nationalCommitteeNonfederalAccount?: string;

  @Metadata({ data: "json, name=original_sub_id" })
  originalSubId?: string;

  @Metadata({ data: "json, name=payee_employer" })
  payeeEmployer?: string;

  @Metadata({ data: "json, name=payee_first_name" })
  payeeFirstName?: string;

  @Metadata({ data: "json, name=payee_last_name" })
  payeeLastName?: string;

  @Metadata({ data: "json, name=payee_middle_name" })
  payeeMiddleName?: string;

  @Metadata({ data: "json, name=payee_occupation" })
  payeeOccupation?: string;

  @Metadata({ data: "json, name=payee_prefix" })
  payeePrefix?: string;

  @Metadata({ data: "json, name=payee_suffix" })
  payeeSuffix?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=recipient_city" })
  recipientCity?: string;

  @Metadata({ data: "json, name=recipient_committee" })
  recipientCommittee?: CommitteeHistory;

  @Metadata({ data: "json, name=recipient_committee_id" })
  recipientCommitteeId?: string;

  @Metadata({ data: "json, name=recipient_name" })
  recipientName?: string;

  @Metadata({ data: "json, name=recipient_state" })
  recipientState?: string;

  @Metadata({ data: "json, name=recipient_zip" })
  recipientZip?: string;

  @Metadata({ data: "json, name=ref_disp_excess_flg" })
  refDispExcessFlg?: string;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @Metadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @Metadata({ data: "json, name=semi_annual_bundled_refund" })
  semiAnnualBundledRefund?: number;

  @Metadata({ data: "json, name=spender_committee_designation" })
  spenderCommitteeDesignation?: string;

  @Metadata({ data: "json, name=spender_committee_org_type" })
  spenderCommitteeOrgType?: string;

  @Metadata({ data: "json, name=spender_committee_type" })
  spenderCommitteeType?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @Metadata({ data: "json, name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number;

  @Metadata({ data: "json, name=unused_recipient_committee_id" })
  unusedRecipientCommitteeId?: string;
}
