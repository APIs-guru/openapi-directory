import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommunicationCost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_code" })
  actionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=action_code_full" })
  actionCodeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_first_name" })
  candidateFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_middle_name" })
  candidateMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_district" })
  candidateOfficeDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_full" })
  candidateOfficeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office_state" })
  candidateOfficeState?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=communication_class" })
  communicationClass?: string;

  @SpeakeasyMetadata({ data: "json, name=communication_type" })
  communicationType?: string;

  @SpeakeasyMetadata({ data: "json, name=communication_type_full" })
  communicationTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=form_type_code" })
  formTypeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=original_sub_id" })
  originalSubId?: number;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_general_indicator" })
  primaryGeneralIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_general_indicator_description" })
  primaryGeneralIndicatorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule_type" })
  scheduleType?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule_type_full" })
  scheduleTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=state_full" })
  stateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: number;

  @SpeakeasyMetadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=tran_id" })
  tranId?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_amount" })
  transactionAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction_date" })
  transactionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transaction_type" })
  transactionType?: string;
}
