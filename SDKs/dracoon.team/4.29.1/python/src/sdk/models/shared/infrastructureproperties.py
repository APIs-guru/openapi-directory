from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InfrastructureProperties:
    is_dracoon_cloud: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDracoonCloud' }})
    media_server_config_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaServerConfigEnabled' }})
    s3_default_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DefaultRegion' }})
    s3_enforce_direct_upload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3EnforceDirectUpload' }})
    sms_config_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsConfigEnabled' }})
    tenant_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantUuid' }})
    
