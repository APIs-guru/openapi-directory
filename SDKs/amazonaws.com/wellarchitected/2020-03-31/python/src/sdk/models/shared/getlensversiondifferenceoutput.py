from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import versiondifferences


@dataclass_json
@dataclass
class GetLensVersionDifferenceOutput:
    base_lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseLensVersion' }})
    latest_lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestLensVersion' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    version_differences: Optional[versiondifferences.VersionDifferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionDifferences' }})
    
