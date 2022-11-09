import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHistory } from "./committeehistory";


export class ScheduleE extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_code" })
  actionCode?: string;

  @Metadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=amendment_number" })
  amendmentNumber?: number;

  @Metadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @Metadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @Metadata({ data: "json, name=candidate" })
  candidate?: string;

  @Metadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

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

  @Metadata({ data: "json, name=category_code_full" })
  categoryCodeFull?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

  @Metadata({ data: "json, name=conduit_committee_id" })
  conduitCommitteeId?: string;

  @Metadata({ data: "json, name=conduit_committee_name" })
  conduitCommitteeName?: string;

  @Metadata({ data: "json, name=conduit_committee_state" })
  conduitCommitteeState?: string;

  @Metadata({ data: "json, name=conduit_committee_street1" })
  conduitCommitteeStreet1?: string;

  @Metadata({ data: "json, name=conduit_committee_street2" })
  conduitCommitteeStreet2?: string;

  @Metadata({ data: "json, name=conduit_committee_zip" })
  conduitCommitteeZip?: number;

  @Metadata({ data: "json, name=dissemination_date" })
  disseminationDate?: Date;

  @Metadata({ data: "json, name=election_type" })
  electionType?: string;

  @Metadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @Metadata({ data: "json, name=expenditure_amount" })
  expenditureAmount?: number;

  @Metadata({ data: "json, name=expenditure_date" })
  expenditureDate?: Date;

  @Metadata({ data: "json, name=expenditure_description" })
  expenditureDescription?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

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

  @Metadata({ data: "json, name=filing_date" })
  filingDate?: Date;

  @Metadata({ data: "json, name=filing_form" })
  filingForm?: string;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=independent_sign_date" })
  independentSignDate?: Date;

  @Metadata({ data: "json, name=independent_sign_name" })
  independentSignName?: string;

  @Metadata({ data: "json, name=is_notice" })
  isNotice?: boolean;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "json, name=link_id" })
  linkId?: number;

  @Metadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @Metadata({ data: "json, name=memo_code_full" })
  memoCodeFull?: string;

  @Metadata({ data: "json, name=memo_text" })
  memoText?: string;

  @Metadata({ data: "json, name=memoed_subtotal" })
  memoedSubtotal?: boolean;

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=notary_commission_expiration_date" })
  notaryCommissionExpirationDate?: Date;

  @Metadata({ data: "json, name=notary_sign_date" })
  notarySignDate?: Date;

  @Metadata({ data: "json, name=notary_sign_name" })
  notarySignName?: string;

  @Metadata({ data: "json, name=office_total_ytd" })
  officeTotalYtd?: number;

  @Metadata({ data: "json, name=original_sub_id" })
  originalSubId?: string;

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

  @Metadata({ data: "json, name=previous_file_number" })
  previousFileNumber?: number;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @Metadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: string;

  @Metadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
