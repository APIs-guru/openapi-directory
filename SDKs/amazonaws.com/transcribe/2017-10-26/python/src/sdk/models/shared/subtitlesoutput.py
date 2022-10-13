from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import subtitleformat_enum


@dataclass_json
@dataclass
class SubtitlesOutput:
    formats: Optional[List[subtitleformat_enum.SubtitleFormatEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Formats' }})
    subtitle_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleFileUris' }})
    
