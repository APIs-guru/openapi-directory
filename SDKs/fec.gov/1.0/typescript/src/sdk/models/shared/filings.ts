import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Filings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_bank_names" })
  additionalBankNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=amendment_version" })
  amendmentVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=bank_depository_city" })
  bankDepositoryCity?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_depository_name" })
  bankDepositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_depository_state" })
  bankDepositoryState?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_depository_street_1" })
  bankDepositoryStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_depository_street_2" })
  bankDepositoryStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_depository_zip" })
  bankDepositoryZip?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_to_committee" })
  debtsOwedToCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=document_type" })
  documentType?: string;

  @SpeakeasyMetadata({ data: "json, name=document_type_full" })
  documentTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=ending_image_number" })
  endingImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=form_category" })
  formCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=form_type" })
  formType?: string;

  @SpeakeasyMetadata({ data: "json, name=house_personal_funds" })
  housePersonalFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=means_filed" })
  meansFiled?: string;

  @SpeakeasyMetadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=most_recent_file_number" })
  mostRecentFileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=net_donations" })
  netDonations?: number;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office?: string;

  @SpeakeasyMetadata({ data: "json, name=opposition_personal_funds" })
  oppositionPersonalFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_file_number" })
  previousFileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_general_indicator" })
  primaryGeneralIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type_full" })
  reportTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=request_type" })
  requestType?: string;

  @SpeakeasyMetadata({ data: "json, name=senate_personal_funds" })
  senatePersonalFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: string;

  @SpeakeasyMetadata({ data: "json, name=total_communication_cost" })
  totalCommunicationCost?: number;

  @SpeakeasyMetadata({ data: "json, name=total_disbursements" })
  totalDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=total_independent_expenditures" })
  totalIndependentExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=total_individual_contributions" })
  totalIndividualContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=total_receipts" })
  totalReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
