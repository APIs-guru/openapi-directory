from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vpcconfigurationdescription


@dataclass_json
@dataclass
class AddApplicationVpcConfigurationResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    vpc_configuration_description: Optional[vpcconfigurationdescription.VpcConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurationDescription' }})
    
