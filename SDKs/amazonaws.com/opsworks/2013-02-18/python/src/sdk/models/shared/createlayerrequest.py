from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsconfiguration
from . import recipes
from . import lifecycleeventconfiguration
from . import layertype_enum
from . import volumeconfiguration


@dataclass_json
@dataclass
class CreateLayerRequest:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    auto_assign_elastic_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAssignElasticIps' }})
    auto_assign_public_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAssignPublicIps' }})
    cloud_watch_logs_configuration: Optional[cloudwatchlogsconfiguration.CloudWatchLogsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsConfiguration' }})
    custom_instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomInstanceProfileArn' }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomJson' }})
    custom_recipes: Optional[recipes.Recipes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomRecipes' }})
    custom_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomSecurityGroupIds' }})
    enable_auto_healing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAutoHealing' }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstallUpdatesOnBoot' }})
    lifecycle_event_configuration: Optional[lifecycleeventconfiguration.LifecycleEventConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleEventConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Packages' }})
    shortname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shortname' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    type: layertype_enum.LayerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    use_ebs_optimized_instances: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseEbsOptimizedInstances' }})
    volume_configurations: Optional[List[volumeconfiguration.VolumeConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeConfigurations' }})
    
