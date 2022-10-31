package operations

import (
"time")

type SearchTmdbmoviesQueryParams struct {
    ChangedateFrom *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
    ChangedateTo *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
    CreatedateFrom *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
    CreatedateTo *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Filesuffix *string `queryParam:"style=form,explode=true,name=filesuffix"`
    Fromdate *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Maxlatitude *float32 `queryParam:"style=form,explode=true,name=maxlatitude"`
    Maxlongitude *float32 `queryParam:"style=form,explode=true,name=maxlongitude"`
    Minlatitude *float32 `queryParam:"style=form,explode=true,name=minlatitude"`
    Minlongitude *float32 `queryParam:"style=form,explode=true,name=minlongitude"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    SearchDbTmdbmoviesBudget *float64 `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.budget"`
    SearchDbTmdbmoviesGenres *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.genres"`
    SearchDbTmdbmoviesHomepage *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.homepage"`
    SearchDbTmdbmoviesKeywords *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.keywords"`
    SearchDbTmdbmoviesMovieID *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.movie_id"`
    SearchDbTmdbmoviesOriginalLanguage *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.original_language"`
    SearchDbTmdbmoviesOriginalTitle *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.original_title"`
    SearchDbTmdbmoviesOverview *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.overview"`
    SearchDbTmdbmoviesPopularity *float64 `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.popularity"`
    SearchDbTmdbmoviesProductionCompanies *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.production_companies"`
    SearchDbTmdbmoviesProductionCountries *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.production_countries"`
    SearchDbTmdbmoviesReleaseDate *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.release_date"`
    SearchDbTmdbmoviesRevenue *float64 `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.revenue"`
    SearchDbTmdbmoviesRuntime *float64 `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.runtime"`
    SearchDbTmdbmoviesSpokenLanguages *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.spoken_languages"`
    SearchDbTmdbmoviesStatus *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.status"`
    SearchDbTmdbmoviesTagline *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.tagline"`
    SearchDbTmdbmoviesTitle *string `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.title"`
    SearchDbTmdbmoviesVoteAverage *float64 `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.vote_average"`
    SearchDbTmdbmoviesVoteCount *float64 `queryParam:"style=form,explode=true,name=search.db_tmdbmovies.vote_count"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchTmdbmoviesRequest struct {
    QueryParams SearchTmdbmoviesQueryParams 
    
}

type SearchTmdbmoviesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

