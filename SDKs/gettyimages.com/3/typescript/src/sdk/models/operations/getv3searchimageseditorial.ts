import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchImagesEditorialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=age_of_people" })
  ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=collection_codes" })
  collectionCodes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" })
  collectionsFilterType?: shared.CollectionsFilterTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=compositions" })
  compositions?: shared.CompositionsFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=download_product" })
  downloadProduct?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=editorial_segments" })
  editorialSegments?: shared.EditorialSegmentContractEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=embed_content_only" })
  embedContentOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=entity_uris" })
  entityUris?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=ethnicity" })
  ethnicity?: shared.EthnicityFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=event_ids" })
  eventIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.EditorialImageSearchFacetsFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EditorialImagesFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=file_types" })
  fileTypes?: shared.SearchFileTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=graphical_styles" })
  graphicalStyles?: shared.EditorialGraphicalStyleEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" })
  graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" })
  includeRelatedSearches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" })
  keywordIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=minimum_quality_rank" })
  minimumQualityRank?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=specific_people" })
  specificPeople?: string[];
}


export class GetV3SearchImagesEditorialHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchImagesEditorialRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchImagesEditorialQueryParams;

  @Metadata()
  headers: GetV3SearchImagesEditorialHeaders;
}


export class GetV3SearchImagesEditorialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  editorialImageSearchResults?: shared.EditorialImageSearchResults;

  @Metadata()
  statusCode: number;
}
