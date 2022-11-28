from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemDraftResponse:
    r"""ItemDraftResponse
    The type that defines the field for the createItemDraft response.
    """
    
    item_draft_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemDraftId') }})
    sell_flow_native_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellFlowNativeUri') }})
    sell_flow_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellFlowUrl') }})
    
