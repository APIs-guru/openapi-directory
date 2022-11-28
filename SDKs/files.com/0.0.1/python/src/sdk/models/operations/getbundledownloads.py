from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetBundleDownloadsQueryParams:
    bundle_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_id', 'style': 'form', 'explode': True }})
    bundle_registration_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_registration_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBundleDownloadsRequest:
    query_params: GetBundleDownloadsQueryParams = field()
    

@dataclass
class GetBundleDownloadsResponse:
    content_type: str = field()
    status_code: int = field()
    bundle_download_entities: Optional[List[shared.BundleDownloadEntity]] = field(default=None)
    
