import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchVideosCreativeByImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateVideoSearchFacetsFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeVideosFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=product_types" })
  productTypes?: string[];
}


export class GetV3SearchVideosCreativeByImageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchVideosCreativeByImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchVideosCreativeByImageQueryParams;

  @Metadata()
  headers: GetV3SearchVideosCreativeByImageHeaders;
}


export class GetV3SearchVideosCreativeByImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativeVideoSearchResults?: shared.CreativeVideoSearchResults;

  @Metadata()
  statusCode: number;
}
