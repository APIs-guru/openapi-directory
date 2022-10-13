from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import definitiondocument
from . import metricsconfiguration
from . import tag
from . import deploymenttarget_enum


@dataclass_json
@dataclass
class CreateSystemInstanceRequest:
    definition: definitiondocument.DefinitionDocument = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    flow_actions_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowActionsRoleArn' }})
    greengrass_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassGroupName' }})
    metrics_configuration: Optional[metricsconfiguration.MetricsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricsConfiguration' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3BucketName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target: deploymenttarget_enum.DeploymentTargetEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
