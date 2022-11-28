import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=age_of_people" })
  ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collection_codes" })
  collectionCodes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" })
  collectionsFilterType?: shared.CollectionsFilterTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=compositions" })
  compositions?: shared.CompositionsFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download_product" })
  downloadProduct?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed_content_only" })
  embedContentOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ethnicity" })
  ethnicity?: shared.EthnicityFilterTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=event_ids" })
  eventIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_nudity" })
  excludeNudity?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImagesFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=file_types" })
  fileTypes?: shared.SearchFileTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=graphical_styles" })
  graphicalStyles?: shared.GraphicalStyleEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" })
  graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" })
  includeRelatedSearches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" })
  keywordIds?: number[];

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
  sortOrder?: shared.BlendedImageSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=specific_people" })
  specificPeople?: string[];
}


export class GetV3SearchImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchImagesQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchImagesHeaders;
}


export class GetV3SearchImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
