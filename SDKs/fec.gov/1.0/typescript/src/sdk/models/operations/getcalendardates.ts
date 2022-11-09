import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCalendarDatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=calendar_category_id" })
  calendarCategoryId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=event_id" })
  eventId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_end_date" })
  maxEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_start_date" })
  maxStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_end_date" })
  minEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_start_date" })
  minStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=summary" })
  summary?: string[];
}


export class GetCalendarDatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCalendarDatesQueryParams;
}


export class GetCalendarDatesResponse extends SpeakeasyBase {
  @Metadata()
  calendarDatePage?: shared.CalendarDatePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
