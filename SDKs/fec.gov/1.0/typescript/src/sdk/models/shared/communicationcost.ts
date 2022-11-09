import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommunicationCost extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_code" })
  actionCode?: string;

  @Metadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

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

  @Metadata({ data: "json, name=candidate_office_full" })
  candidateOfficeFull?: string;

  @Metadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=communication_class" })
  communicationClass?: string;

  @Metadata({ data: "json, name=communication_type" })
  communicationType?: string;

  @Metadata({ data: "json, name=communication_type_full" })
  communicationTypeFull?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=form_type_code" })
  formTypeCode?: string;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=primary_general_indicator" })
  primaryGeneralIndicator?: string;

  @Metadata({ data: "json, name=primary_general_indicator_description" })
  primaryGeneralIndicatorDescription?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @Metadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @Metadata({ data: "json, name=state_full" })
  stateFull?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: number;

  @Metadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator?: string;

  @Metadata({ data: "json, name=tran_id" })
  tranId?: string;

  @Metadata({ data: "json, name=transaction_amount" })
  transactionAmount?: number;

  @Metadata({ data: "json, name=transaction_date" })
  transactionDate?: Date;

  @Metadata({ data: "json, name=transaction_type" })
  transactionType?: string;
}
