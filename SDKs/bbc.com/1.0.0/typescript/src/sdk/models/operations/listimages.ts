import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListImagesEmbargoedEnum {
    Include = "include"
,    Exclude = "exclude"
,    Only = "only"
}

export enum ListImagesImageTypeEnum {
    Standard = "standard"
,    Podcast = "podcast"
,    Store = "store"
,    Portrait = "portrait"
,    Letterbox = "letterbox"
}

export enum ListImagesSortEnum {
    GroupPosition = "group_position"
,    Pid = "pid"
}

export enum ListImagesSortDirectionEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class ListImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListImagesEmbargoedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_type" })
  imageType?: ListImagesImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_alternate_image_for" })
  isAlternateImageFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_image_for" })
  isImageFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListImagesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListImagesSortDirectionEnum;
}


export class ListImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListImagesQueryParams;
}


export class ListImagesResponse extends SpeakeasyBase {
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
