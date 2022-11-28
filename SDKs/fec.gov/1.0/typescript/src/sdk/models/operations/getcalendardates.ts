import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCalendarDatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calendar_category_id" })
  calendarCategoryId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_id" })
  eventId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_end_date" })
  maxEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_start_date" })
  maxStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_end_date" })
  minEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_start_date" })
  minStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=summary" })
  summary?: string[];
}


export class GetCalendarDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCalendarDatesQueryParams;
}


export class GetCalendarDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarDatePage?: shared.CalendarDatePage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
