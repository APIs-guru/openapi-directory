import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Filings extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_bank_names" })
  additionalBankNames?: string[];

  @Metadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=amendment_version" })
  amendmentVersion?: number;

  @Metadata({ data: "json, name=bank_depository_city" })
  bankDepositoryCity?: string;

  @Metadata({ data: "json, name=bank_depository_name" })
  bankDepositoryName?: string;

  @Metadata({ data: "json, name=bank_depository_state" })
  bankDepositoryState?: string;

  @Metadata({ data: "json, name=bank_depository_street_1" })
  bankDepositoryStreet1?: string;

  @Metadata({ data: "json, name=bank_depository_street_2" })
  bankDepositoryStreet2?: string;

  @Metadata({ data: "json, name=bank_depository_zip" })
  bankDepositoryZip?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @Metadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @Metadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @Metadata({ data: "json, name=debts_owed_to_committee" })
  debtsOwedToCommittee?: number;

  @Metadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @Metadata({ data: "json, name=document_type" })
  documentType?: string;

  @Metadata({ data: "json, name=document_type_full" })
  documentTypeFull?: string;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=ending_image_number" })
  endingImageNumber?: string;

  @Metadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=form_category" })
  formCategory?: string;

  @Metadata({ data: "json, name=form_type" })
  formType?: string;

  @Metadata({ data: "json, name=house_personal_funds" })
  housePersonalFunds?: number;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @Metadata({ data: "json, name=means_filed" })
  meansFiled?: string;

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=most_recent_file_number" })
  mostRecentFileNumber?: number;

  @Metadata({ data: "json, name=net_donations" })
  netDonations?: number;

  @Metadata({ data: "json, name=office" })
  office?: string;

  @Metadata({ data: "json, name=opposition_personal_funds" })
  oppositionPersonalFunds?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=previous_file_number" })
  previousFileNumber?: number;

  @Metadata({ data: "json, name=primary_general_indicator" })
  primaryGeneralIndicator?: string;

  @Metadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_type_full" })
  reportTypeFull?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=request_type" })
  requestType?: string;

  @Metadata({ data: "json, name=senate_personal_funds" })
  senatePersonalFunds?: number;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: string;

  @Metadata({ data: "json, name=total_communication_cost" })
  totalCommunicationCost?: number;

  @Metadata({ data: "json, name=total_disbursements" })
  totalDisbursements?: number;

  @Metadata({ data: "json, name=total_independent_expenditures" })
  totalIndependentExpenditures?: number;

  @Metadata({ data: "json, name=total_individual_contributions" })
  totalIndividualContributions?: number;

  @Metadata({ data: "json, name=total_receipts" })
  totalReceipts?: number;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
