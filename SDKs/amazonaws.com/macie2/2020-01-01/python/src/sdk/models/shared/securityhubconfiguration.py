from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecurityHubConfiguration:
    publish_classification_findings: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishClassificationFindings' }})
    publish_policy_findings: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishPolicyFindings' }})
    
