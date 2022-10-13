from dataclasses import dataclass, field



@dataclass
class TrendingGetTrendingEntryDetailPathParams:
    identifier: str = field(default=None, metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    trending_entry_type: int = field(default=None, metadata={'path_param': { 'field_name': 'trendingEntryType', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrendingGetTrendingEntryDetailRequest:
    path_params: TrendingGetTrendingEntryDetailPathParams = field(default=None)
    

@dataclass
class TrendingGetTrendingEntryDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
