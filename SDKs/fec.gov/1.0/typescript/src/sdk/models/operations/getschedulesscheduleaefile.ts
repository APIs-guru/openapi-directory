import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulesScheduleAEfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_city" })
  contributorCity?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_employer" })
  contributorEmployer?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_name" })
  contributorName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_occupation" })
  contributorOccupation?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_state" })
  contributorState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

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
}


export class GetSchedulesScheduleAEfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleAEfileQueryParams;
}


export class GetSchedulesScheduleAEfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleAEfilePage?: shared.ScheduleAEfilePage;

  @SpeakeasyMetadata()
  statusCode: number;
}
