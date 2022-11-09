import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesScheduleAByZipQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string[];
}


export class GetSchedulesScheduleAByZipRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleAByZipQueryParams;
}


export class GetSchedulesScheduleAByZipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleAByZipPage?: shared.ScheduleAByZipPage;

  @Metadata()
  statusCode: number;
}
