import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchImagesCreativeByImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateImageSearchFacetsFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeImagesFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_fingerprint" })
  imageFingerprint?: string;

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


export class GetV3SearchImagesCreativeByImageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchImagesCreativeByImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchImagesCreativeByImageQueryParams;

  @Metadata()
  headers: GetV3SearchImagesCreativeByImageHeaders;
}


export class GetV3SearchImagesCreativeByImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchByImageResourceResults?: shared.SearchByImageResourceResults;

  @Metadata()
  statusCode: number;
}
