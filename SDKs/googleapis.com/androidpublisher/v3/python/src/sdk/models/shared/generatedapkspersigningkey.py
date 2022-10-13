from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import generatedassetpackslice
from . import generatedsplitapk
from . import generatedstandaloneapk
from . import generateduniversalapk


@dataclass_json
@dataclass
class GeneratedApksPerSigningKey:
    certificate_sha256_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateSha256Hash' }})
    generated_asset_pack_slices: Optional[List[generatedassetpackslice.GeneratedAssetPackSlice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedAssetPackSlices' }})
    generated_split_apks: Optional[List[generatedsplitapk.GeneratedSplitApk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedSplitApks' }})
    generated_standalone_apks: Optional[List[generatedstandaloneapk.GeneratedStandaloneApk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedStandaloneApks' }})
    generated_universal_apk: Optional[generateduniversalapk.GeneratedUniversalApk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedUniversalApk' }})
    
