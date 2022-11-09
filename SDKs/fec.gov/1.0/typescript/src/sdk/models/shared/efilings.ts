import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EFilings extends SpeakeasyBase {
  @Metadata({ data: "json, name=amended_by" })
  amendedBy?: number;

  @Metadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @Metadata({ data: "json, name=amendment_number" })
  amendmentNumber?: number;

  @Metadata({ data: "json, name=amends_file" })
  amendsFile?: number;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

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

  @Metadata({ data: "json, name=ending_image_number" })
  endingImageNumber?: string;

  @Metadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=filed_date" })
  filedDate?: Date;

  @Metadata({ data: "json, name=form_type" })
  formType?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @Metadata({ data: "json, name=load_timestamp" })
  loadTimestamp?: Date;

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=most_recent_filing" })
  mostRecentFiling?: number;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;
}
