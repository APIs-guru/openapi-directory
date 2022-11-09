import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListMasterbrandsMixinEnum {
    Images = "images"
}

export enum ListMasterbrandsSortEnum {
    Mid = "mid"
}

export enum ListMasterbrandsSortDirectionEnum {
    Ascending = "ascending"
}


export class ListMasterbrandsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mid" })
  mid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListMasterbrandsMixinEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListMasterbrandsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListMasterbrandsSortDirectionEnum;
}


export class ListMasterbrandsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListMasterbrandsQueryParams;
}


export class ListMasterbrandsResponse extends SpeakeasyBase {
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
