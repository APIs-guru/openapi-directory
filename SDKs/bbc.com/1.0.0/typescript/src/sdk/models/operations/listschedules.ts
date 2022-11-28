import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListSchedulesMixinEnum {
    AncestorTitles = "ancestor_titles",
    Images = "images",
    Titles = "titles"
}

export enum ListSchedulesSortEnum {
    StartDate = "start_date"
}

export enum ListSchedulesSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}


export class ListSchedulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authority" })
  authority?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_from" })
  endFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_to" })
  endTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre" })
  genre?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_type" })
  idType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item" })
  item?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListSchedulesMixinEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people" })
  people?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repeat" })
  repeat?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_day" })
  scheduleDay?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_day_from" })
  scheduleDayFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_day_to" })
  scheduleDayTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_master_brand" })
  serviceMasterBrand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sid" })
  sid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListSchedulesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListSchedulesSortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_from" })
  startFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_to" })
  startTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string[];
}


export class ListSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSchedulesQueryParams;
}


export class ListSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
