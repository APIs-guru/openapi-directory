import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListItemsItemTypeEnum {
    Chapter = "chapter",
    Highlight = "highlight",
    Music = "music",
    Speech = "speech",
    Other = "other"
}

export enum ListItemsMixinEnum {
    Contributions = "contributions",
    Images = "images",
    Offset = "offset",
    PlayEvent = "play_event"
}

export enum ListItemsSortEnum {
    Pid = "pid"
}

export enum ListItemsSortDirectionEnum {
    Descending = "descending"
}


export class ListItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authority" })
  authority?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_type" })
  idType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" })
  itemType?: ListItemsItemTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListItemsMixinEnum[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=programme" })
  programme?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_event" })
  segmentEvent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListItemsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListItemsSortDirectionEnum;
}


export class ListItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListItemsQueryParams;
}


export class ListItemsResponse extends SpeakeasyBase {
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
