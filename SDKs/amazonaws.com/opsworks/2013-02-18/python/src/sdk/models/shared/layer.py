from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsconfiguration
from . import recipes
from . import recipes
from . import lifecycleeventconfiguration
from . import layertype_enum
from . import volumeconfiguration


@dataclass_json
@dataclass
class Layer:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    auto_assign_elastic_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAssignElasticIps' }})
    auto_assign_public_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAssignPublicIps' }})
    cloud_watch_logs_configuration: Optional[cloudwatchlogsconfiguration.CloudWatchLogsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsConfiguration' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    custom_instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomInstanceProfileArn' }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomJson' }})
    custom_recipes: Optional[recipes.Recipes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomRecipes' }})
    custom_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomSecurityGroupIds' }})
    default_recipes: Optional[recipes.Recipes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRecipes' }})
    default_security_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSecurityGroupNames' }})
    enable_auto_healing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAutoHealing' }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstallUpdatesOnBoot' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerId' }})
    lifecycle_event_configuration: Optional[lifecycleeventconfiguration.LifecycleEventConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleEventConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Packages' }})
    shortname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shortname' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    type: Optional[layertype_enum.LayerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    use_ebs_optimized_instances: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseEbsOptimizedInstances' }})
    volume_configurations: Optional[List[volumeconfiguration.VolumeConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeConfigurations' }})
    
