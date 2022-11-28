from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GeneratedApksPerSigningKey:
    r"""GeneratedApksPerSigningKey
    Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
    """
    
    certificate_sha256_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateSha256Hash') }})
    generated_asset_pack_slices: Optional[List[GeneratedAssetPackSlice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedAssetPackSlices') }})
    generated_split_apks: Optional[List[GeneratedSplitApk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedSplitApks') }})
    generated_standalone_apks: Optional[List[GeneratedStandaloneApk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedStandaloneApks') }})
    generated_universal_apk: Optional[GeneratedUniversalApk] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedUniversalApk') }})
    
