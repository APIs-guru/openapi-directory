import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListImagesEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}

export enum ListImagesImageTypeEnum {
    Standard = "standard",
    Podcast = "podcast",
    Store = "store",
    Portrait = "portrait",
    Letterbox = "letterbox"
}

export enum ListImagesSortEnum {
    GroupPosition = "group_position",
    Pid = "pid"
}

export enum ListImagesSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}


export class ListImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListImagesEmbargoedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_type" })
  imageType?: ListImagesImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_alternate_image_for" })
  isAlternateImageFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_image_for" })
  isImageFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListImagesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListImagesSortDirectionEnum;
}


export class ListImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListImagesQueryParams;
}


export class ListImagesResponse extends SpeakeasyBase {
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
