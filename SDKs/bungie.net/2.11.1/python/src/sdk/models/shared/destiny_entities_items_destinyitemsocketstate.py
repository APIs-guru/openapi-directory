from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyEntitiesItemsDestinyItemSocketState:
    r"""DestinyEntitiesItemsDestinyItemSocketState
    The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what \"reusable\" plugs can be inserted, etc...)
    If I had it to do over, this would probably have a DestinyItemPlug representing the inserted item instead of most of these properties. :shrug:
    """
    
    enable_fail_indexes: Optional[List[int]] = field(default=None)
    is_enabled: Optional[bool] = field(default=None)
    is_visible: Optional[bool] = field(default=None)
    plug_hash: Optional[int] = field(default=None)
    
