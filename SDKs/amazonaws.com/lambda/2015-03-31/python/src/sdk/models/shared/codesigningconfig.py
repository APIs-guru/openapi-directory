from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import allowedpublishers
from . import codesigningpolicies


@dataclass_json
@dataclass
class CodeSigningConfig:
    allowed_publishers: allowedpublishers.AllowedPublishers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedPublishers' }})
    code_signing_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfigArn' }})
    code_signing_config_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfigId' }})
    code_signing_policies: codesigningpolicies.CodeSigningPolicies = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningPolicies' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_modified: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified' }})
    
