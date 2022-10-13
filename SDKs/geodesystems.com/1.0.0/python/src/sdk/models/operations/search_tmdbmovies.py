from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchTmdbmoviesQueryParams:
    changedate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_budget: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.budget', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_genres: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.genres', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_homepage: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.homepage', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_keywords: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.keywords', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_movie_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.movie_id', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_original_language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.original_language', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_original_title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.original_title', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_overview: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.overview', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_popularity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.popularity', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_production_companies: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.production_companies', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_production_countries: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.production_countries', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_release_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.release_date', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_revenue: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.revenue', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_runtime: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.runtime', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_spoken_languages: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.spoken_languages', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.status', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_tagline: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.tagline', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.title', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_vote_average: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.vote_average', 'style': 'form', 'explode': True }})
    search_db_tmdbmovies_vote_count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_tmdbmovies.vote_count', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchTmdbmoviesRequest:
    query_params: SearchTmdbmoviesQueryParams = field(default=None)
    

@dataclass
class SearchTmdbmoviesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
