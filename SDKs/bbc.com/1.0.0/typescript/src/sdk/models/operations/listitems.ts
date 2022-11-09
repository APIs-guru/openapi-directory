import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListItemsItemTypeEnum {
    Chapter = "chapter"
,    Highlight = "highlight"
,    Music = "music"
,    Speech = "speech"
,    Other = "other"
}

export enum ListItemsMixinEnum {
    Contributions = "contributions"
,    Images = "images"
,    Offset = "offset"
,    PlayEvent = "play_event"
}

export enum ListItemsSortEnum {
    Pid = "pid"
}

export enum ListItemsSortDirectionEnum {
    Descending = "descending"
}


export class ListItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authority" })
  authority?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=id_type" })
  idType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_type" })
  itemType?: ListItemsItemTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListItemsMixinEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=programme" })
  programme?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segment_event" })
  segmentEvent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListItemsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListItemsSortDirectionEnum;
}


export class ListItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListItemsQueryParams;
}


export class ListItemsResponse extends SpeakeasyBase {
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
