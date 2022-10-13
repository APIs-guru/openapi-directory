from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accesstype_enum
from . import environmentaccessmodel
from . import environmentaccesstype_enum


@dataclass_json
@dataclass
class CreatePermissionGroupRequest:
    access_type: Optional[accesstype_enum.AccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessType' }})
    can_create_or_update_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCreateOrUpdateConfig' }})
    can_create_or_update_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCreateOrUpdateEnvironment' }})
    can_create_or_update_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCreateOrUpdateSetting' }})
    can_create_or_update_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCreateOrUpdateTag' }})
    can_delete_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteConfig' }})
    can_delete_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteEnvironment' }})
    can_delete_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteSetting' }})
    can_delete_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteTag' }})
    can_manage_integrations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canManageIntegrations' }})
    can_manage_members: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canManageMembers' }})
    can_manage_product_preferences: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canManageProductPreferences' }})
    can_manage_webhook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canManageWebhook' }})
    can_rotate_sdk_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRotateSdkKey' }})
    can_tag_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canTagSetting' }})
    can_use_export_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUseExportImport' }})
    can_view_product_audit_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canViewProductAuditLog' }})
    can_view_product_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canViewProductStatistics' }})
    can_view_sdk_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canViewSdkKey' }})
    environment_accesses: Optional[List[environmentaccessmodel.EnvironmentAccessModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccesses' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_environment_access_type: Optional[environmentaccesstype_enum.EnvironmentAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newEnvironmentAccessType' }})
    
