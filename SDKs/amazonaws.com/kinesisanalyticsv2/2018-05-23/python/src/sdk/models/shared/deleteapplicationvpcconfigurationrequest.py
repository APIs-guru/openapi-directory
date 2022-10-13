from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteApplicationVpcConfigurationRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalToken' }})
    current_application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    vpc_configuration_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurationId' }})
    
