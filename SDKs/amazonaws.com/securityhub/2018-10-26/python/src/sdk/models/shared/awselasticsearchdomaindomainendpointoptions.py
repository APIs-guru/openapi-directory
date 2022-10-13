from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElasticsearchDomainDomainEndpointOptions:
    enforce_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnforceHTTPS' }})
    tls_security_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TLSSecurityPolicy' }})
    
