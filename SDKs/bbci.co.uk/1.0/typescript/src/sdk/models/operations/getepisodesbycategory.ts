import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEpisodesByCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetEpisodesByCategorySortEnum {
    Recent = "recent"
,    Popular = "popular"
}


export class GetEpisodesByCategoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetEpisodesByCategorySortEnum;
}


export class GetEpisodesByCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEpisodesByCategoryPathParams;

  @Metadata()
  queryParams: GetEpisodesByCategoryQueryParams;
}


export class GetEpisodesByCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
