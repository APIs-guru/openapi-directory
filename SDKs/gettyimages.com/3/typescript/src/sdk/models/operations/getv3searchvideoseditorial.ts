import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchVideosEditorialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=age_of_people" })
  ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=aspect_ratios" })
  aspectRatios?: shared.VideoAspectRatioFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=collection_codes" })
  collectionCodes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" })
  collectionsFilterType?: shared.CollectionsFilterTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=compositions" })
  compositions?: shared.CompositionsFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=download_product" })
  downloadProduct?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=editorial_video_types" })
  editorialVideoTypes?: shared.EditorialVideoTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=entity_uris" })
  entityUris?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.EditorialVideoSearchFacetsFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EditorialVideosFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=format_available" })
  formatAvailable?: shared.VideoFormatsRequestEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=frame_rates" })
  frameRates?: shared.VideoFrameRatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=image_techniques" })
  imageTechniques?: shared.ImageTechniquesFilterTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" })
  includeRelatedSearches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" })
  keywordIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_clip_length" })
  maxClipLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_clip_length" })
  minClipLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=orientations" })
  orientations?: shared.VideoOrientationRequestEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=release_status" })
  releaseStatus?: shared.ReleaseStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=specific_people" })
  specificPeople?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=viewpoints" })
  viewpoints?: shared.ViewpointsFilterTypeEnum[];
}


export class GetV3SearchVideosEditorialHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchVideosEditorialRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchVideosEditorialQueryParams;

  @Metadata()
  headers: GetV3SearchVideosEditorialHeaders;
}


export class GetV3SearchVideosEditorialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  editorialVideoSearchResults?: shared.EditorialVideoSearchResults;

  @Metadata()
  statusCode: number;
}
