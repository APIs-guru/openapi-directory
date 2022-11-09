import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetItvPageItemDetailExpandEnum {
    All = "all"
,    Children = "children"
,    Ancestors = "ancestors"
}

export enum GetItvPageItemDetailSelectSeasonEnum {
    First = "first"
,    Latest = "latest"
}

export enum GetItvPageTextEntryFormatEnum {
    Markdown = "markdown"
,    Html = "html"
}


export class GetItvPageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_detail_expand" })
  itemDetailExpand?: GetItvPageItemDetailExpandEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_detail_select_season" })
  itemDetailSelectSeason?: GetItvPageItemDetailSelectSeasonEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=list_page_size" })
  listPageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=list_page_size_large" })
  listPageSizeLarge?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_list_prefetch" })
  maxListPrefetch?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text_entry_format" })
  textEntryFormat?: GetItvPageTextEntryFormatEnum;
}


export class GetItvPageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItvPageQueryParams;
}


export class GetItvPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  page?: shared.Page;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
