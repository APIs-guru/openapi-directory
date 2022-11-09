import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BaseF3XFiling extends SpeakeasyBase {
  @Metadata({ data: "json, name=amend_address" })
  amendAddress?: string;

  @Metadata({ data: "json, name=amended_by" })
  amendedBy?: number;

  @Metadata({ data: "json, name=amendment" })
  amendment?: string;

  @Metadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

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

  @Metadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @Metadata({ data: "json, name=election_date" })
  electionDate?: Date;

  @Metadata({ data: "json, name=election_state" })
  electionState?: string;

  @Metadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=most_recent_filing" })
  mostRecentFiling?: number;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=qualified_multicandidate_committee" })
  qualifiedMulticandidateCommittee?: string;

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

  @Metadata({ data: "json, name=summary_lines" })
  summaryLines?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
