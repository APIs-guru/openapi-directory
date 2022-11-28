import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EFilings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amended_by" })
  amendedBy?: number;

  @SpeakeasyMetadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @SpeakeasyMetadata({ data: "json, name=amendment_number" })
  amendmentNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=amends_file" })
  amendsFile?: number;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

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

  @SpeakeasyMetadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ending_image_number" })
  endingImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=filed_date" })
  filedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=form_type" })
  formType?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=load_timestamp" })
  loadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=most_recent_filing" })
  mostRecentFiling?: number;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;
}
