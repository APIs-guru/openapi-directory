import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";


export class ScheduleBEfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @Metadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=beneficiary_committee_name" })
  beneficiaryCommitteeName?: string;

  @Metadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @Metadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @Metadata({ data: "json, name=disbursement_amount" })
  disbursementAmount?: number;

  @Metadata({ data: "json, name=disbursement_date" })
  disbursementDate?: Date;

  @Metadata({ data: "json, name=disbursement_description" })
  disbursementDescription?: string;

  @Metadata({ data: "json, name=disbursement_type" })
  disbursementType?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber: number;

  @Metadata({ data: "json, name=filing" })
  filing?: EFilings;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=is_notice" })
  isNotice?: boolean;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "json, name=load_timestamp" })
  loadTimestamp?: Date;

  @Metadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @Metadata({ data: "json, name=memo_text" })
  memoText?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=recipient_city" })
  recipientCity?: string;

  @Metadata({ data: "json, name=recipient_name" })
  recipientName?: string;

  @Metadata({ data: "json, name=recipient_prefix" })
  recipientPrefix?: string;

  @Metadata({ data: "json, name=recipient_state" })
  recipientState?: string;

  @Metadata({ data: "json, name=recipient_suffix" })
  recipientSuffix?: string;

  @Metadata({ data: "json, name=recipient_zip" })
  recipientZip?: string;

  @Metadata({ data: "json, name=related_line_number" })
  relatedLineNumber: number;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=semi_annual_bundled_refund" })
  semiAnnualBundledRefund?: number;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
