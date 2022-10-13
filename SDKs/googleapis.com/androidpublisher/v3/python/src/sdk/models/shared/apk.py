from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apkbinary


@dataclass_json
@dataclass
class Apk:
    binary: Optional[apkbinary.ApkBinary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binary' }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    
