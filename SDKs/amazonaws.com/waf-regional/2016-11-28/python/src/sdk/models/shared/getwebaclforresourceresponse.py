from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import webaclsummary


@dataclass_json
@dataclass
class GetWebACLForResourceResponse:
    web_acl_summary: Optional[webaclsummary.WebACLSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLSummary' }})
    
