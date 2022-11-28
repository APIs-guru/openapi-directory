import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportingDatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_create_date" })
  maxCreateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_due_date" })
  maxDueDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_update_date" })
  maxUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_create_date" })
  minCreateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_due_date" })
  minDueDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_update_date" })
  minUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" })
  reportYear?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetReportingDatesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ReportDate })
  results?: shared.ReportDate[];
}


export class GetReportingDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportingDatesQueryParams;
}


export class GetReportingDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReportingDatesDefaultApplicationJsonObject?: GetReportingDatesDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
