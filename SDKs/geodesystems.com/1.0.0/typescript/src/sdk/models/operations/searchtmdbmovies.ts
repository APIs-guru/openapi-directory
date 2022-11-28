import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTmdbmoviesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.budget" })
  searchDbTmdbmoviesBudget?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.genres" })
  searchDbTmdbmoviesGenres?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.homepage" })
  searchDbTmdbmoviesHomepage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.keywords" })
  searchDbTmdbmoviesKeywords?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.movie_id" })
  searchDbTmdbmoviesMovieId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.original_language" })
  searchDbTmdbmoviesOriginalLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.original_title" })
  searchDbTmdbmoviesOriginalTitle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.overview" })
  searchDbTmdbmoviesOverview?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.popularity" })
  searchDbTmdbmoviesPopularity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.production_companies" })
  searchDbTmdbmoviesProductionCompanies?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.production_countries" })
  searchDbTmdbmoviesProductionCountries?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.release_date" })
  searchDbTmdbmoviesReleaseDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.revenue" })
  searchDbTmdbmoviesRevenue?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.runtime" })
  searchDbTmdbmoviesRuntime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.spoken_languages" })
  searchDbTmdbmoviesSpokenLanguages?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.status" })
  searchDbTmdbmoviesStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.tagline" })
  searchDbTmdbmoviesTagline?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.title" })
  searchDbTmdbmoviesTitle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.vote_average" })
  searchDbTmdbmoviesVoteAverage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.vote_count" })
  searchDbTmdbmoviesVoteCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTmdbmoviesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTmdbmoviesQueryParams;
}


export class SearchTmdbmoviesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
