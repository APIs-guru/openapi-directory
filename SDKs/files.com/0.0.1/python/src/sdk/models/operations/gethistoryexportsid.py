from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHistoryExportsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHistoryExportsIDRequest:
    path_params: GetHistoryExportsIDPathParams = field(default=None)
    

@dataclass
class GetHistoryExportsIDResponse:
    content_type: str = field(default=None)
    history_export_entity: Optional[shared.HistoryExportEntity] = field(default=None)
    status_code: int = field(default=None)
    
