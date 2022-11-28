from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SoftwareInfo:
    r"""SoftwareInfo
    Information about device software.
    """
    
    android_build_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidBuildNumber') }})
    android_build_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidBuildTime') }})
    android_device_policy_version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevicePolicyVersionCode') }})
    android_device_policy_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevicePolicyVersionName') }})
    android_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidVersion') }})
    bootloader_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootloaderVersion') }})
    device_build_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceBuildSignature') }})
    device_kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceKernelVersion') }})
    primary_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryLanguageCode') }})
    security_patch_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPatchLevel') }})
    system_update_info: Optional[SystemUpdateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemUpdateInfo') }})
    
