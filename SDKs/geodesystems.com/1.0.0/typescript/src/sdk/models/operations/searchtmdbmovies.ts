import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTmdbmoviesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.budget" })
  searchDbTmdbmoviesBudget?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.genres" })
  searchDbTmdbmoviesGenres?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.homepage" })
  searchDbTmdbmoviesHomepage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.keywords" })
  searchDbTmdbmoviesKeywords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.movie_id" })
  searchDbTmdbmoviesMovieId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.original_language" })
  searchDbTmdbmoviesOriginalLanguage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.original_title" })
  searchDbTmdbmoviesOriginalTitle?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.overview" })
  searchDbTmdbmoviesOverview?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.popularity" })
  searchDbTmdbmoviesPopularity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.production_companies" })
  searchDbTmdbmoviesProductionCompanies?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.production_countries" })
  searchDbTmdbmoviesProductionCountries?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.release_date" })
  searchDbTmdbmoviesReleaseDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.revenue" })
  searchDbTmdbmoviesRevenue?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.runtime" })
  searchDbTmdbmoviesRuntime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.spoken_languages" })
  searchDbTmdbmoviesSpokenLanguages?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.status" })
  searchDbTmdbmoviesStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.tagline" })
  searchDbTmdbmoviesTagline?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.title" })
  searchDbTmdbmoviesTitle?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.vote_average" })
  searchDbTmdbmoviesVoteAverage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tmdbmovies.vote_count" })
  searchDbTmdbmoviesVoteCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTmdbmoviesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTmdbmoviesQueryParams;
}


export class SearchTmdbmoviesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
