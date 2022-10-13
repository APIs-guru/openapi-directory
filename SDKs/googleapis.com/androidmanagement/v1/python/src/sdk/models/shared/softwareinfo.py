from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systemupdateinfo


@dataclass_json
@dataclass
class SoftwareInfo:
    android_build_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidBuildNumber' }})
    android_build_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidBuildTime' }})
    android_device_policy_version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDevicePolicyVersionCode' }})
    android_device_policy_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDevicePolicyVersionName' }})
    android_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidVersion' }})
    bootloader_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootloaderVersion' }})
    device_build_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceBuildSignature' }})
    device_kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceKernelVersion' }})
    primary_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryLanguageCode' }})
    security_patch_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPatchLevel' }})
    system_update_info: Optional[systemupdateinfo.SystemUpdateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemUpdateInfo' }})
    
