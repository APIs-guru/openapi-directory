import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";



export class ScheduleA extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=amendment_indicator_desc" })
  amendmentIndicatorDesc?: string;

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

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

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

  @SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=contribution_receipt_date" })
  contributionReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=contributor" })
  contributor?: CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=contributor_aggregate_ytd" })
  contributorAggregateYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=contributor_city" })
  contributorCity?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_employer" })
  contributorEmployer?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_first_name" })
  contributorFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_id" })
  contributorId?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_last_name" })
  contributorLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_middle_name" })
  contributorMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_name" })
  contributorName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_occupation" })
  contributorOccupation?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_prefix" })
  contributorPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_state" })
  contributorState?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_street_1" })
  contributorStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_street_2" })
  contributorStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_suffix" })
  contributorSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_zip" })
  contributorZip?: string;

  @SpeakeasyMetadata({ data: "json, name=donor_committee_name" })
  donorCommitteeName?: string;

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

  @SpeakeasyMetadata({ data: "json, name=increased_limit" })
  increasedLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=is_individual" })
  isIndividual?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_type" })
  receiptType?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_type_desc" })
  receiptTypeDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_type_full" })
  receiptTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_committee_designation" })
  recipientCommitteeDesignation?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_committee_org_type" })
  recipientCommitteeOrgType?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_committee_type" })
  recipientCommitteeType?: string;

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

  @SpeakeasyMetadata({ data: "json, name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=unused_contbr_id" })
  unusedContbrId?: string;
}
