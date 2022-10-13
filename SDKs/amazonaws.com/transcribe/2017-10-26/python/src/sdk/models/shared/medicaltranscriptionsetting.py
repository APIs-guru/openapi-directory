from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MedicalTranscriptionSetting:
    channel_identification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelIdentification' }})
    max_alternatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAlternatives' }})
    max_speaker_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSpeakerLabels' }})
    show_alternatives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowAlternatives' }})
    show_speaker_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowSpeakerLabels' }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyName' }})
    
