import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";



export class ScheduleEEfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_middle_name" })
  candidateMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_party" })
  candidateParty?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_prefix" })
  candidatePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_suffix" })
  candidateSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=category_code" })
  categoryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=dissemination_date" })
  disseminationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=expenditure_amount" })
  expenditureAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=expenditure_date" })
  expenditureDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expenditure_description" })
  expenditureDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber: number;

  @SpeakeasyMetadata({ data: "json, name=filer_first_name" })
  filerFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=filer_last_name" })
  filerLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=filer_middle_name" })
  filerMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=filer_prefix" })
  filerPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=filer_suffix" })
  filerSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=filing" })
  filing?: EFilings;

  @SpeakeasyMetadata({ data: "json, name=filing_form" })
  filingForm?: string;

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

  @SpeakeasyMetadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notary_sign_date" })
  notarySignDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=office_total_ytd" })
  officeTotalYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=payee_city" })
  payeeCity?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_first_name" })
  payeeFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_last_name" })
  payeeLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_middle_name" })
  payeeMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_prefix" })
  payeePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_state" })
  payeeState?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_street_1" })
  payeeStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_street_2" })
  payeeStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_suffix" })
  payeeSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_zip" })
  payeeZip?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=related_line_number" })
  relatedLineNumber: number;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
