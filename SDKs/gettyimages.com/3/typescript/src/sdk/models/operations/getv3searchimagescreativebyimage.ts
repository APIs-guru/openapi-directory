import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchImagesCreativeByImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateImageSearchFacetsFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeImagesFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_fingerprint" })
  imageFingerprint?: string;

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


export class GetV3SearchImagesCreativeByImageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchImagesCreativeByImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchImagesCreativeByImageQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchImagesCreativeByImageHeaders;
}


export class GetV3SearchImagesCreativeByImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchByImageResourceResults?: shared.SearchByImageResourceResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
