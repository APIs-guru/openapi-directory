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
class SystemInstanceDescription:
    r"""SystemInstanceDescription
    An object that contains a system instance definition and summary information.
    """
    
    definition: Optional[DefinitionDocument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    flow_actions_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowActionsRoleArn') }})
    metrics_configuration: Optional[MetricsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsConfiguration') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketName') }})
    summary: Optional[SystemInstanceSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    validated_dependency_revisions: Optional[List[DependencyRevision]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedDependencyRevisions') }})
    validated_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedNamespaceVersion') }})
    
