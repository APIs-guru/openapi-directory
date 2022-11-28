import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTmdbmoviesQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbTmdbmoviesBudget?: number;
    searchDbTmdbmoviesGenres?: string;
    searchDbTmdbmoviesHomepage?: string;
    searchDbTmdbmoviesKeywords?: string;
    searchDbTmdbmoviesMovieId?: string;
    searchDbTmdbmoviesOriginalLanguage?: string;
    searchDbTmdbmoviesOriginalTitle?: string;
    searchDbTmdbmoviesOverview?: string;
    searchDbTmdbmoviesPopularity?: number;
    searchDbTmdbmoviesProductionCompanies?: string;
    searchDbTmdbmoviesProductionCountries?: string;
    searchDbTmdbmoviesReleaseDate?: string;
    searchDbTmdbmoviesRevenue?: number;
    searchDbTmdbmoviesRuntime?: number;
    searchDbTmdbmoviesSpokenLanguages?: string;
    searchDbTmdbmoviesStatus?: string;
    searchDbTmdbmoviesTagline?: string;
    searchDbTmdbmoviesTitle?: string;
    searchDbTmdbmoviesVoteAverage?: number;
    searchDbTmdbmoviesVoteCount?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTmdbmoviesRequest extends SpeakeasyBase {
    queryParams: SearchTmdbmoviesQueryParams;
}
export declare class SearchTmdbmoviesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
