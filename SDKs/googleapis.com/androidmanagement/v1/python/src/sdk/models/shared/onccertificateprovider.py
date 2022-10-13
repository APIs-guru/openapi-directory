from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contentproviderendpoint


@dataclass_json
@dataclass
class OncCertificateProvider:
    certificate_references: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateReferences' }})
    content_provider_endpoint: Optional[contentproviderendpoint.ContentProviderEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentProviderEndpoint' }})
    
