from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import describeportfoliosharetype_enum


@dataclass_json
@dataclass
class PortfolioShareDetail:
    accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accepted' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalId' }})
    share_tag_options: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareTagOptions' }})
    type: Optional[describeportfoliosharetype_enum.DescribePortfolioShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
