import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodesByCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetEpisodesByCategorySortEnum {
    Recent = "recent",
    Popular = "popular"
}


export class GetEpisodesByCategoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetEpisodesByCategorySortEnum;
}


export class GetEpisodesByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodesByCategoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodesByCategoryQueryParams;
}


export class GetEpisodesByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
