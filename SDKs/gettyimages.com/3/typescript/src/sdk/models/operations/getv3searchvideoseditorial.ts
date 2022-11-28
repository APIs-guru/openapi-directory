import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchVideosEditorialQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=age_of_people" })
  ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=aspect_ratios" })
  aspectRatios?: shared.VideoAspectRatioFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collection_codes" })
  collectionCodes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" })
  collectionsFilterType?: shared.CollectionsFilterTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=compositions" })
  compositions?: shared.CompositionsFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download_product" })
  downloadProduct?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=editorial_video_types" })
  editorialVideoTypes?: shared.EditorialVideoTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=entity_uris" })
  entityUris?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.EditorialVideoSearchFacetsFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EditorialVideosFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format_available" })
  formatAvailable?: shared.VideoFormatsRequestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=frame_rates" })
  frameRates?: shared.VideoFrameRatesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=image_techniques" })
  imageTechniques?: shared.ImageTechniquesFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_facets" })
  includeFacets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" })
  includeRelatedSearches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" })
  keywordIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_clip_length" })
  maxClipLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_clip_length" })
  minClipLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=orientations" })
  orientations?: shared.VideoOrientationRequestEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=release_status" })
  releaseStatus?: shared.ReleaseStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=specific_people" })
  specificPeople?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=viewpoints" })
  viewpoints?: shared.ViewpointsFilterTypeEnum[];
}


export class GetV3SearchVideosEditorialHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchVideosEditorialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchVideosEditorialQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchVideosEditorialHeaders;
}


export class GetV3SearchVideosEditorialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialVideoSearchResults?: shared.EditorialVideoSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
