import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHistory } from "./committeehistory";
import { CommitteeHistory } from "./committeehistory";


export class ScheduleA extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=amendment_indicator_desc" })
  amendmentIndicatorDesc?: string;

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

  @Metadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

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

  @Metadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @Metadata({ data: "json, name=contribution_receipt_date" })
  contributionReceiptDate?: Date;

  @Metadata({ data: "json, name=contributor" })
  contributor?: CommitteeHistory;

  @Metadata({ data: "json, name=contributor_aggregate_ytd" })
  contributorAggregateYtd?: number;

  @Metadata({ data: "json, name=contributor_city" })
  contributorCity?: string;

  @Metadata({ data: "json, name=contributor_employer" })
  contributorEmployer?: string;

  @Metadata({ data: "json, name=contributor_first_name" })
  contributorFirstName?: string;

  @Metadata({ data: "json, name=contributor_id" })
  contributorId?: string;

  @Metadata({ data: "json, name=contributor_last_name" })
  contributorLastName?: string;

  @Metadata({ data: "json, name=contributor_middle_name" })
  contributorMiddleName?: string;

  @Metadata({ data: "json, name=contributor_name" })
  contributorName?: string;

  @Metadata({ data: "json, name=contributor_occupation" })
  contributorOccupation?: string;

  @Metadata({ data: "json, name=contributor_prefix" })
  contributorPrefix?: string;

  @Metadata({ data: "json, name=contributor_state" })
  contributorState?: string;

  @Metadata({ data: "json, name=contributor_street_1" })
  contributorStreet1?: string;

  @Metadata({ data: "json, name=contributor_street_2" })
  contributorStreet2?: string;

  @Metadata({ data: "json, name=contributor_suffix" })
  contributorSuffix?: string;

  @Metadata({ data: "json, name=contributor_zip" })
  contributorZip?: string;

  @Metadata({ data: "json, name=donor_committee_name" })
  donorCommitteeName?: string;

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

  @Metadata({ data: "json, name=increased_limit" })
  increasedLimit?: string;

  @Metadata({ data: "json, name=is_individual" })
  isIndividual?: boolean;

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

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=receipt_type" })
  receiptType?: string;

  @Metadata({ data: "json, name=receipt_type_desc" })
  receiptTypeDesc?: string;

  @Metadata({ data: "json, name=receipt_type_full" })
  receiptTypeFull?: string;

  @Metadata({ data: "json, name=recipient_committee_designation" })
  recipientCommitteeDesignation?: string;

  @Metadata({ data: "json, name=recipient_committee_org_type" })
  recipientCommitteeOrgType?: string;

  @Metadata({ data: "json, name=recipient_committee_type" })
  recipientCommitteeType?: string;

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

  @Metadata({ data: "json, name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number;

  @Metadata({ data: "json, name=unused_contbr_id" })
  unusedContbrId?: string;
}
