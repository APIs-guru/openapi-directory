from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Layer:
    r"""Layer
    Describes a layer.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    auto_assign_elastic_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAssignElasticIps') }})
    auto_assign_public_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAssignPublicIps') }})
    cloud_watch_logs_configuration: Optional[CloudWatchLogsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsConfiguration') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    custom_instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomInstanceProfileArn') }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomJson') }})
    custom_recipes: Optional[Recipes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomRecipes') }})
    custom_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomSecurityGroupIds') }})
    default_recipes: Optional[Recipes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRecipes') }})
    default_security_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSecurityGroupNames') }})
    enable_auto_healing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAutoHealing') }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallUpdatesOnBoot') }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    lifecycle_event_configuration: Optional[LifecycleEventConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleEventConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Packages') }})
    shortname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shortname') }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    type: Optional[LayerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    use_ebs_optimized_instances: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseEbsOptimizedInstances') }})
    volume_configurations: Optional[List[VolumeConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeConfigurations') }})
    
