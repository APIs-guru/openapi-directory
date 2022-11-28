from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHistoryExportsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHistoryExportsIDRequest:
    path_params: GetHistoryExportsIDPathParams = field()
    

@dataclass
class GetHistoryExportsIDResponse:
    content_type: str = field()
    status_code: int = field()
    history_export_entity: Optional[shared.HistoryExportEntity] = field(default=None)
    
