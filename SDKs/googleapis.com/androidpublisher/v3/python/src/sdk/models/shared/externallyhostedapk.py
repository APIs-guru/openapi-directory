from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExternallyHostedApk:
    r"""ExternallyHostedApk
    Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
    """
    
    application_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationLabel') }})
    certificate_base64s: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateBase64s') }})
    externally_hosted_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externallyHostedUrl') }})
    file_sha1_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSha1Base64') }})
    file_sha256_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSha256Base64') }})
    file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSize') }})
    icon_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconBase64') }})
    maximum_sdk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumSdk') }})
    minimum_sdk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumSdk') }})
    native_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeCodes') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    uses_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesFeatures') }})
    uses_permissions: Optional[List[UsesPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesPermissions') }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionName') }})
    
