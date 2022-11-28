import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";



export class ScheduleBEfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=beneficiary_committee_name" })
  beneficiaryCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursement_amount" })
  disbursementAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=disbursement_date" })
  disbursementDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=disbursement_description" })
  disbursementDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursement_type" })
  disbursementType?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber: number;

  @SpeakeasyMetadata({ data: "json, name=filing" })
  filing?: EFilings;

  @SpeakeasyMetadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=is_notice" })
  isNotice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=load_timestamp" })
  loadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=memo_text" })
  memoText?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_city" })
  recipientCity?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_name" })
  recipientName?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_prefix" })
  recipientPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_state" })
  recipientState?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_suffix" })
  recipientSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_zip" })
  recipientZip?: string;

  @SpeakeasyMetadata({ data: "json, name=related_line_number" })
  relatedLineNumber: number;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=semi_annual_bundled_refund" })
  semiAnnualBundledRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
