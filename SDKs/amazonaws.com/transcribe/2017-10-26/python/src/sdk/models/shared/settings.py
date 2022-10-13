from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import vocabularyfiltermethod_enum


@dataclass_json
@dataclass
class Settings:
    channel_identification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelIdentification' }})
    max_alternatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAlternatives' }})
    max_speaker_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSpeakerLabels' }})
    show_alternatives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowAlternatives' }})
    show_speaker_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowSpeakerLabels' }})
    vocabulary_filter_method: Optional[vocabularyfiltermethod_enum.VocabularyFilterMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterMethod' }})
    vocabulary_filter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterName' }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyName' }})
    
