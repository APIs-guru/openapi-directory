from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MobileDeviceApplications:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    permission: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionName' }})
    

@dataclass_json
@dataclass
class MobileDevice:
    adb_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adbStatus' }})
    applications: Optional[List[MobileDeviceApplications]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    baseband_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basebandVersion' }})
    bootloader_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootloaderVersion' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    build_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildNumber' }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    developer_options_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerOptionsStatus' }})
    device_compromised_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCompromisedStatus' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_password_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePasswordStatus' }})
    email: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    encryption_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionStatus' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    first_sync: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstSync', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hardware: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardware' }})
    hardware_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardwareId' }})
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imei' }})
    kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernelVersion' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_sync: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSync', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_account_is_on_owner_profile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedAccountIsOnOwnerProfile' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meid' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkOperator' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    other_accounts_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherAccountsInfo' }})
    privilege: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privilege' }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseVersion' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    security_patch_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPatchLevel' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supports_work_profile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsWorkProfile' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unknown_sources_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknownSourcesStatus' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    wifi_mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMacAddress' }})
    
