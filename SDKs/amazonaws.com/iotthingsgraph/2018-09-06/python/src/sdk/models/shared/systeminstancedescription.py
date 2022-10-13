from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import definitiondocument
from . import metricsconfiguration
from . import systeminstancesummary
from . import dependencyrevision


@dataclass_json
@dataclass
class SystemInstanceDescription:
    definition: Optional[definitiondocument.DefinitionDocument] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    flow_actions_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowActionsRoleArn' }})
    metrics_configuration: Optional[metricsconfiguration.MetricsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricsConfiguration' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3BucketName' }})
    summary: Optional[systeminstancesummary.SystemInstanceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    validated_dependency_revisions: Optional[List[dependencyrevision.DependencyRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedDependencyRevisions' }})
    validated_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedNamespaceVersion' }})
    
