import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetOperationsLogStatusNumEnum {
    Zero = "0",
    One = "1"
}


export class GetOperationsLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" })
  amendmentIndicator?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" })
  beginningImageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_committee_id" })
  candidateCommitteeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_type" })
  formType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_coverage_end_date" })
  maxCoverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" })
  maxReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_transaction_data_complete_date" })
  maxTransactionDataCompleteDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_coverage_end_date" })
  minCoverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" })
  minReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_transaction_data_complete_date" })
  minTransactionDataCompleteDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" })
  reportYear?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status_num" })
  statusNum?: GetOperationsLogStatusNumEnum[];
}


export class GetOperationsLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOperationsLogQueryParams;
}


export class GetOperationsLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationsLogPage?: shared.OperationsLogPage;

  @SpeakeasyMetadata()
  statusCode: number;
}
