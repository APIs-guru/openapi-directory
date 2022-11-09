import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportingDatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_create_date" })
  maxCreateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_due_date" })
  maxDueDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_update_date" })
  maxUpdateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_create_date" })
  minCreateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_due_date" })
  minDueDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_update_date" })
  minUpdateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_year" })
  reportYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetReportingDatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportingDatesQueryParams;
}


export class GetReportingDatesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ReportDate })
  results?: shared.ReportDate[];
}


export class GetReportingDatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportingDatesDefaultApplicationJsonObject?: GetReportingDatesDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
