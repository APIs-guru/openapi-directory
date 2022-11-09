import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OperationsLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=candidate_committee_id" })
  candidateCommitteeId?: string;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @Metadata({ data: "json, name=ending_image_number" })
  endingImageNumber?: string;

  @Metadata({ data: "json, name=form_type" })
  formType?: string;

  @Metadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=status_num" })
  statusNum?: number;

  @Metadata({ data: "json, name=sub_id" })
  subId?: number;

  @Metadata({ data: "json, name=summary_data_complete_date" })
  summaryDataCompleteDate?: Date;

  @Metadata({ data: "json, name=summary_data_verification_date" })
  summaryDataVerificationDate?: Date;

  @Metadata({ data: "json, name=transaction_data_complete_date" })
  transactionDataCompleteDate?: Date;
}
