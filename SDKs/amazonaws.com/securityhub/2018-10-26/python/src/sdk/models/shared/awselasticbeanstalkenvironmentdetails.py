from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awselasticbeanstalkenvironmentenvironmentlink
from . import awselasticbeanstalkenvironmentoptionsetting
from . import awselasticbeanstalkenvironmenttier


@dataclass_json
@dataclass
class AwsElasticBeanstalkEnvironmentDetails:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cname' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateCreated' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateUpdated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointUrl' }})
    environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentArn' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentId' }})
    environment_links: Optional[List[awselasticbeanstalkenvironmentenvironmentlink.AwsElasticBeanstalkEnvironmentEnvironmentLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentLinks' }})
    environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentName' }})
    option_settings: Optional[List[awselasticbeanstalkenvironmentoptionsetting.AwsElasticBeanstalkEnvironmentOptionSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionSettings' }})
    platform_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformArn' }})
    solution_stack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SolutionStackName' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tier: Optional[awselasticbeanstalkenvironmenttier.AwsElasticBeanstalkEnvironmentTier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    version_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionLabel' }})
    
