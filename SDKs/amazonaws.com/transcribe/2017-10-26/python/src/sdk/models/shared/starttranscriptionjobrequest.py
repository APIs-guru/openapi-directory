from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTranscriptionJobRequest:
    media: Media = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    transcription_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobName') }})
    content_redaction: Optional[ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentRedaction') }})
    identify_language: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifyLanguage') }})
    job_execution_settings: Optional[JobExecutionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobExecutionSettings') }})
    kms_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSEncryptionContext') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    language_options: Optional[List[LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageOptions') }})
    media_format: Optional[MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    model_settings: Optional[ModelSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSettings') }})
    output_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucketName') }})
    output_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputEncryptionKMSKeyId') }})
    output_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKey') }})
    settings: Optional[Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    subtitles: Optional[Subtitles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subtitles') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
