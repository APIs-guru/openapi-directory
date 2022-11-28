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
class CreateLayerRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    shortname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shortname') }})
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    type: LayerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    auto_assign_elastic_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAssignElasticIps') }})
    auto_assign_public_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAssignPublicIps') }})
    cloud_watch_logs_configuration: Optional[CloudWatchLogsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsConfiguration') }})
    custom_instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomInstanceProfileArn') }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomJson') }})
    custom_recipes: Optional[Recipes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomRecipes') }})
    custom_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomSecurityGroupIds') }})
    enable_auto_healing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAutoHealing') }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallUpdatesOnBoot') }})
    lifecycle_event_configuration: Optional[LifecycleEventConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleEventConfiguration') }})
    packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Packages') }})
    use_ebs_optimized_instances: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseEbsOptimizedInstances') }})
    volume_configurations: Optional[List[VolumeConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeConfigurations') }})
    
