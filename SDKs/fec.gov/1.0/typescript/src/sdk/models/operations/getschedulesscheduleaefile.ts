import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesScheduleAEfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_city" })
  contributorCity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_employer" })
  contributorEmployer?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_name" })
  contributorName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_occupation" })
  contributorOccupation?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_state" })
  contributorState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

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
}


export class GetSchedulesScheduleAEfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleAEfileQueryParams;
}


export class GetSchedulesScheduleAEfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleAEfilePage?: shared.ScheduleAEfilePage;

  @Metadata()
  statusCode: number;
}
