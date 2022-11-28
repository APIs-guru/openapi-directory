from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class BulkCreateOrUpdateAnnotationsPathParams:
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateOrUpdateAnnotationsRequest:
    path_params: BulkCreateOrUpdateAnnotationsPathParams = field()
    request: List[dict[str, Any]] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BulkCreateOrUpdateAnnotationsResponse:
    content_type: str = field()
    status_code: int = field()
    report_annotations: Optional[List[dict[str, Any]]] = field(default=None)
    
