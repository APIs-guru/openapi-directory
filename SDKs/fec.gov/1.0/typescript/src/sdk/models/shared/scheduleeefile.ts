import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";


export class ScheduleEEfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @Metadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_middle_name" })
  candidateMiddleName?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @Metadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @Metadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @Metadata({ data: "json, name=candidate_party" })
  candidateParty?: string;

  @Metadata({ data: "json, name=candidate_prefix" })
  candidatePrefix?: string;

  @Metadata({ data: "json, name=candidate_suffix" })
  candidateSuffix?: string;

  @Metadata({ data: "json, name=category_code" })
  categoryCode?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @Metadata({ data: "json, name=dissemination_date" })
  disseminationDate?: Date;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

  @Metadata({ data: "json, name=expenditure_amount" })
  expenditureAmount?: number;

  @Metadata({ data: "json, name=expenditure_date" })
  expenditureDate?: Date;

  @Metadata({ data: "json, name=expenditure_description" })
  expenditureDescription?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber: number;

  @Metadata({ data: "json, name=filer_first_name" })
  filerFirstName?: string;

  @Metadata({ data: "json, name=filer_last_name" })
  filerLastName?: string;

  @Metadata({ data: "json, name=filer_middle_name" })
  filerMiddleName?: string;

  @Metadata({ data: "json, name=filer_prefix" })
  filerPrefix?: string;

  @Metadata({ data: "json, name=filer_suffix" })
  filerSuffix?: string;

  @Metadata({ data: "json, name=filing" })
  filing?: EFilings;

  @Metadata({ data: "json, name=filing_form" })
  filingForm?: string;

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

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=notary_sign_date" })
  notarySignDate?: Date;

  @Metadata({ data: "json, name=office_total_ytd" })
  officeTotalYtd?: number;

  @Metadata({ data: "json, name=payee_city" })
  payeeCity?: string;

  @Metadata({ data: "json, name=payee_first_name" })
  payeeFirstName?: string;

  @Metadata({ data: "json, name=payee_last_name" })
  payeeLastName?: string;

  @Metadata({ data: "json, name=payee_middle_name" })
  payeeMiddleName?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=payee_prefix" })
  payeePrefix?: string;

  @Metadata({ data: "json, name=payee_state" })
  payeeState?: string;

  @Metadata({ data: "json, name=payee_street_1" })
  payeeStreet1?: string;

  @Metadata({ data: "json, name=payee_street_2" })
  payeeStreet2?: string;

  @Metadata({ data: "json, name=payee_suffix" })
  payeeSuffix?: string;

  @Metadata({ data: "json, name=payee_zip" })
  payeeZip?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=related_line_number" })
  relatedLineNumber: number;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
