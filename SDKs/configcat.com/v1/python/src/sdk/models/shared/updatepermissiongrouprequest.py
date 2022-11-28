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
class UpdatePermissionGroupRequest:
    access_type: Optional[AccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    can_create_or_update_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateConfig') }})
    can_create_or_update_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateEnvironment') }})
    can_create_or_update_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateSetting') }})
    can_create_or_update_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateOrUpdateTag') }})
    can_delete_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteConfig') }})
    can_delete_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteEnvironment') }})
    can_delete_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteSetting') }})
    can_delete_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteTag') }})
    can_manage_integrations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageIntegrations') }})
    can_manage_members: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageMembers') }})
    can_manage_product_preferences: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageProductPreferences') }})
    can_manage_webhook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageWebhook') }})
    can_rotate_sdk_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRotateSdkKey') }})
    can_tag_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canTagSetting') }})
    can_use_export_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUseExportImport') }})
    can_view_product_audit_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewProductAuditLog') }})
    can_view_product_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewProductStatistics') }})
    can_view_sdk_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewSdkKey') }})
    environment_accesses: Optional[List[EnvironmentAccessModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccesses') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_environment_access_type: Optional[EnvironmentAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newEnvironmentAccessType') }})
    
