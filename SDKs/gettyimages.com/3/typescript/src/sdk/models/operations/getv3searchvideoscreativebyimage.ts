import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchVideosCreativeByImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateVideoSearchFacetsFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeVideosFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=product_types" })
  productTypes?: string[];
}


export class GetV3SearchVideosCreativeByImageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchVideosCreativeByImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchVideosCreativeByImageQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchVideosCreativeByImageHeaders;
}


export class GetV3SearchVideosCreativeByImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  creativeVideoSearchResults?: shared.CreativeVideoSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
