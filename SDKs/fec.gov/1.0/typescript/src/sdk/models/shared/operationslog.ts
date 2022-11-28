import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OperationsLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_committee_id" })
  candidateCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ending_image_number" })
  endingImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=form_type" })
  formType?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=status_num" })
  statusNum?: number;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: number;

  @SpeakeasyMetadata({ data: "json, name=summary_data_complete_date" })
  summaryDataCompleteDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=summary_data_verification_date" })
  summaryDataVerificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transaction_data_complete_date" })
  transactionDataCompleteDate?: Date;
}
