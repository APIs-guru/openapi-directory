import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchIncludeEnum {
    Tv = "tv"
,    Movies = "movies"
,    People = "people"
,    Other = "other"
}


export class SearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: SearchIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchQueryParams;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchResults?: shared.SearchResults;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
