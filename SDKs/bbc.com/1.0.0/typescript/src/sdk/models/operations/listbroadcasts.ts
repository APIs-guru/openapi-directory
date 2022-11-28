import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListBroadcastsMixinEnum {
    Titles = "titles"
}

export enum ListBroadcastsSortEnum {
    StartDate = "start_date"
}

export enum ListBroadcastsSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}


export class ListBroadcastsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item" })
  item?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListBroadcastsMixinEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people" })
  people?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

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
  sort?: ListBroadcastsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListBroadcastsSortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_from" })
  startFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_to" })
  startTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string[];
}


export class ListBroadcastsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListBroadcastsQueryParams;
}


export class ListBroadcastsResponse extends SpeakeasyBase {
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
