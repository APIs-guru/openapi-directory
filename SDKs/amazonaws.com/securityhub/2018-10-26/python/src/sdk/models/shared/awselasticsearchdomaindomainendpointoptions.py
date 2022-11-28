from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElasticsearchDomainDomainEndpointOptions:
    r"""AwsElasticsearchDomainDomainEndpointOptions
    Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
    """
    
    enforce_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforceHTTPS') }})
    tls_security_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TLSSecurityPolicy') }})
    
