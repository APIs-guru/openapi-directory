import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchVideosCreativeQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_editorial_use_only" })
  excludeEditorialUseOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_nudity" })
  excludeNudity?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateVideoSearchFacetsFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeVideosFieldValuesEnum[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=license_models" })
  licenseModels?: shared.LicenseModelVideoRequestEnum[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.CreativeVideoSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=viewpoints" })
  viewpoints?: shared.ViewpointsFilterTypeEnum[];
}


export class GetV3SearchVideosCreativeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchVideosCreativeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchVideosCreativeQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchVideosCreativeHeaders;
}


export class GetV3SearchVideosCreativeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  creativeVideoSearchResults?: shared.CreativeVideoSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
