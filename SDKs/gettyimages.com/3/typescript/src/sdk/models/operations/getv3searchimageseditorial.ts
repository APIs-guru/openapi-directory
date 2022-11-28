import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchImagesEditorialQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=age_of_people" })
  ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collection_codes" })
  collectionCodes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" })
  collectionsFilterType?: shared.CollectionsFilterTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=compositions" })
  compositions?: shared.CompositionsFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download_product" })
  downloadProduct?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=editorial_segments" })
  editorialSegments?: shared.EditorialSegmentContractEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed_content_only" })
  embedContentOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=entity_uris" })
  entityUris?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ethnicity" })
  ethnicity?: shared.EthnicityFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=event_ids" })
  eventIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.EditorialImageSearchFacetsFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EditorialImagesFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=file_types" })
  fileTypes?: shared.SearchFileTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=graphical_styles" })
  graphicalStyles?: shared.EditorialGraphicalStyleEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" })
  graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" })
  includeRelatedSearches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" })
  keywordIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimum_quality_rank" })
  minimumQualityRank?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimum_size" })
  minimumSize?: shared.TeeShirtSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=number_of_people" })
  numberOfPeople?: shared.NumberOfPeopleFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=orientations" })
  orientations?: shared.OrientationRequestEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=specific_people" })
  specificPeople?: string[];
}


export class GetV3SearchImagesEditorialHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchImagesEditorialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchImagesEditorialQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchImagesEditorialHeaders;
}


export class GetV3SearchImagesEditorialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialImageSearchResults?: shared.EditorialImageSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
