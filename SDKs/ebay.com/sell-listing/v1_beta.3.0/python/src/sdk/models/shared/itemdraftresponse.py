from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemDraftResponse:
    item_draft_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemDraftId' }})
    sell_flow_native_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellFlowNativeUri' }})
    sell_flow_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellFlowUrl' }})
    
