import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchVideosCreativeQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_editorial_use_only" })
  excludeEditorialUseOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_nudity" })
  excludeNudity?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" })
  facetFields?: shared.CreateVideoSearchFacetsFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" })
  facetMaxCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.CreativeVideosFieldValuesEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=false;name=license_models" })
  licenseModels?: shared.LicenseModelVideoRequestEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.CreativeVideoSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=viewpoints" })
  viewpoints?: shared.ViewpointsFilterTypeEnum[];
}


export class GetV3SearchVideosCreativeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchVideosCreativeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchVideosCreativeQueryParams;

  @Metadata()
  headers: GetV3SearchVideosCreativeHeaders;
}


export class GetV3SearchVideosCreativeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativeVideoSearchResults?: shared.CreativeVideoSearchResults;

  @Metadata()
  statusCode: number;
}
