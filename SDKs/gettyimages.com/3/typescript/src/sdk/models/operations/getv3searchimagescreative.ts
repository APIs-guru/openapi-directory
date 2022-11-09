import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchImagesCreativeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=age_of_people" })
  ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=collection_codes" })
  collectionCodes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" })
  collectionsFilterType?: shared.CollectionsFilterTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=compositions" })
  compositions?: shared.CompositionsFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=download_product" })
  downloadProduct?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=embed_content_only" })
  embedContentOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ethnicity" })
  ethnicity?: shared.EthnicityFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_editorial_use_only" })
  excludeEditorialUseOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_nudity" })
  excludeNudity?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateImageSearchFacetsFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeImagesFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=file_types" })
  fileTypes?: shared.SearchFileTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=graphical_styles" })
  graphicalStyles?: shared.GraphicalStyleEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" })
  graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" })
  includeRelatedSearches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" })
  keywordIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=minimum_size" })
  minimumSize?: shared.TeeShirtSizeEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=number_of_people" })
  numberOfPeople?: shared.NumberOfPeopleFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=orientations" })
  orientations?: shared.OrientationRequestEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.CreativeImageSortOrderEnum;
}


export class GetV3SearchImagesCreativeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchImagesCreativeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchImagesCreativeQueryParams;

  @Metadata()
  headers: GetV3SearchImagesCreativeHeaders;
}


export class GetV3SearchImagesCreativeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativeImageSearchResults?: shared.CreativeImageSearchResults;

  @Metadata()
  statusCode: number;
}
