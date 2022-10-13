from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webhook
from . import links
from . import meta


@dataclass_json
@dataclass
class GetWebhooksResponse:
    data: List[webhook.Webhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
