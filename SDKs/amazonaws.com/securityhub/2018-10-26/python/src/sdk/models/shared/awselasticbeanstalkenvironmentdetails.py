from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElasticBeanstalkEnvironmentDetails:
    r"""AwsElasticBeanstalkEnvironmentDetails
    Contains details about an Elastic Beanstalk environment.
    """
    
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cname') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateCreated') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateUpdated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointUrl') }})
    environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentArn') }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentId') }})
    environment_links: Optional[List[AwsElasticBeanstalkEnvironmentEnvironmentLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentLinks') }})
    environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentName') }})
    option_settings: Optional[List[AwsElasticBeanstalkEnvironmentOptionSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionSettings') }})
    platform_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformArn') }})
    solution_stack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SolutionStackName') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tier: Optional[AwsElasticBeanstalkEnvironmentTier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    version_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionLabel') }})
    
