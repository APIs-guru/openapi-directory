import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListSchedulesMixinEnum {
    AncestorTitles = "ancestor_titles"
,    Images = "images"
,    Titles = "titles"
}

export enum ListSchedulesSortEnum {
    StartDate = "start_date"
}

export enum ListSchedulesSortDirectionEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class ListSchedulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authority" })
  authority?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_from" })
  endFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_to" })
  endTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=genre" })
  genre?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=id_type" })
  idType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=item" })
  item?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListSchedulesMixinEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=people" })
  people?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repeat" })
  repeat?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=schedule_day" })
  scheduleDay?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=schedule_day_from" })
  scheduleDayFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=schedule_day_to" })
  scheduleDayTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service_master_brand" })
  serviceMasterBrand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sid" })
  sid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListSchedulesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListSchedulesSortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_from" })
  startFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_to" })
  startTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string[];
}


export class ListSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSchedulesQueryParams;
}


export class ListSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
