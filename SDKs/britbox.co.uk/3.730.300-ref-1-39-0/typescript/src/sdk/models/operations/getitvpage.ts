import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetItvPageItemDetailExpandEnum {
    All = "all",
    Children = "children",
    Ancestors = "ancestors"
}

export enum GetItvPageItemDetailSelectSeasonEnum {
    First = "first",
    Latest = "latest"
}

export enum GetItvPageTextEntryFormatEnum {
    Markdown = "markdown",
    Html = "html"
}


export class GetItvPageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_detail_expand" })
  itemDetailExpand?: GetItvPageItemDetailExpandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_detail_select_season" })
  itemDetailSelectSeason?: GetItvPageItemDetailSelectSeasonEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list_page_size" })
  listPageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list_page_size_large" })
  listPageSizeLarge?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_list_prefetch" })
  maxListPrefetch?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text_entry_format" })
  textEntryFormat?: GetItvPageTextEntryFormatEnum;
}


export class GetItvPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetItvPageQueryParams;
}


export class GetItvPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  page?: shared.Page;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
