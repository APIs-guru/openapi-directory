import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BaseF3PFiling extends SpeakeasyBase {
  @Metadata({ data: "json, name=amended_by" })
  amendedBy?: number;

  @Metadata({ data: "json, name=amendment" })
  amendment?: string;

  @Metadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @Metadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @Metadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @Metadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @Metadata({ data: "json, name=debts_owed_to_committee" })
  debtsOwedToCommittee?: number;

  @Metadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @Metadata({ data: "json, name=election_date" })
  electionDate?: Date;

  @Metadata({ data: "json, name=election_state" })
  electionState?: string;

  @Metadata({ data: "json, name=expenditure_subject_to_limits" })
  expenditureSubjectToLimits?: number;

  @Metadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=general_election" })
  generalElection?: string;

  @Metadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=most_recent_filing" })
  mostRecentFiling?: number;

  @Metadata({ data: "json, name=net_contributions_cycle_to_date" })
  netContributionsCycleToDate?: number;

  @Metadata({ data: "json, name=net_operating_expenditures_cycle_to_date" })
  netOperatingExpendituresCycleToDate?: number;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=primary_election" })
  primaryElection?: string;

  @Metadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @Metadata({ data: "json, name=report" })
  report?: string;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=rpt_pgi" })
  rptPgi?: string;

  @Metadata({ data: "json, name=sign_date" })
  signDate?: Date;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=street_1" })
  street1?: string;

  @Metadata({ data: "json, name=street_2" })
  street2?: string;

  @Metadata({ data: "json, name=subtotal_summary_period" })
  subtotalSummaryPeriod?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;

  @Metadata({ data: "json, name=summary_lines" })
  summaryLines?: string;

  @Metadata({ data: "json, name=treasurer_first_name" })
  treasurerFirstName?: string;

  @Metadata({ data: "json, name=treasurer_last_name" })
  treasurerLastName?: string;

  @Metadata({ data: "json, name=treasurer_middle_name" })
  treasurerMiddleName?: string;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
