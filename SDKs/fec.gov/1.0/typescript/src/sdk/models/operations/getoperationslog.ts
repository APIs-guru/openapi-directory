import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOperationsLogStatusNumEnum {
    Zero = "0"
,    One = "1"
}


export class GetOperationsLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" })
  amendmentIndicator?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" })
  beginningImageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_committee_id" })
  candidateCommitteeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=form_type" })
  formType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_coverage_end_date" })
  maxCoverageEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" })
  maxReceiptDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_transaction_data_complete_date" })
  maxTransactionDataCompleteDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_coverage_end_date" })
  minCoverageEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" })
  minReceiptDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_transaction_data_complete_date" })
  minTransactionDataCompleteDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_year" })
  reportYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status_num" })
  statusNum?: GetOperationsLogStatusNumEnum[];
}


export class GetOperationsLogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOperationsLogQueryParams;
}


export class GetOperationsLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationsLogPage?: shared.OperationsLogPage;

  @Metadata()
  statusCode: number;
}
