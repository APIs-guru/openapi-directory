from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import describedsecuritypolicy


@dataclass_json
@dataclass
class DescribeSecurityPolicyResponse:
    security_policy: describedsecuritypolicy.DescribedSecurityPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityPolicy' }})
    
