from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsPresentationDestinyPresentationNodesComponent:
    nodes: Optional[dict[str, DestinyComponentsPresentationDestinyPresentationNodeComponent]] = field(default=None)
    
