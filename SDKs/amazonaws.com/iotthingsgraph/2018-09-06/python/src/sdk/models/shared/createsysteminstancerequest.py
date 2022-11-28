from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSystemInstanceRequest:
    definition: DefinitionDocument = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    target: DeploymentTargetEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    flow_actions_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowActionsRoleArn') }})
    greengrass_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassGroupName') }})
    metrics_configuration: Optional[MetricsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsConfiguration') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
