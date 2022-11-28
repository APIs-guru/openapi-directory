from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TrendingGetTrendingEntryDetailPathParams:
    identifier: str = field(metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    trending_entry_type: int = field(metadata={'path_param': { 'field_name': 'trendingEntryType', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrendingGetTrendingEntryDetailRequest:
    path_params: TrendingGetTrendingEntryDetailPathParams = field()
    

@dataclass
class TrendingGetTrendingEntryDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
