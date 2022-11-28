import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BaseF3PFiling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amended_by" })
  amendedBy?: number;

  @SpeakeasyMetadata({ data: "json, name=amendment" })
  amendment?: string;

  @SpeakeasyMetadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_to_committee" })
  debtsOwedToCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=election_date" })
  electionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=election_state" })
  electionState?: string;

  @SpeakeasyMetadata({ data: "json, name=expenditure_subject_to_limits" })
  expenditureSubjectToLimits?: number;

  @SpeakeasyMetadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=general_election" })
  generalElection?: string;

  @SpeakeasyMetadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=most_recent_filing" })
  mostRecentFiling?: number;

  @SpeakeasyMetadata({ data: "json, name=net_contributions_cycle_to_date" })
  netContributionsCycleToDate?: number;

  @SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_cycle_to_date" })
  netOperatingExpendituresCycleToDate?: number;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_election" })
  primaryElection?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=rpt_pgi" })
  rptPgi?: string;

  @SpeakeasyMetadata({ data: "json, name=sign_date" })
  signDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=street_1" })
  street1?: string;

  @SpeakeasyMetadata({ data: "json, name=street_2" })
  street2?: string;

  @SpeakeasyMetadata({ data: "json, name=subtotal_summary_period" })
  subtotalSummaryPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=summary_lines" })
  summaryLines?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_first_name" })
  treasurerFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_last_name" })
  treasurerLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_middle_name" })
  treasurerMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
