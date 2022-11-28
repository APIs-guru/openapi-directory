from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MedicalTranscriptionSetting:
    r"""MedicalTranscriptionSetting
    Optional settings for the <a>StartMedicalTranscriptionJob</a> operation.
    """
    
    channel_identification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelIdentification') }})
    max_alternatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAlternatives') }})
    max_speaker_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSpeakerLabels') }})
    show_alternatives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowAlternatives') }})
    show_speaker_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowSpeakerLabels') }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    
