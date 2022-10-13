from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contentredaction
from . import jobexecutionsettings
from . import languagecode_enum
from . import languagecode_enum
from . import media
from . import mediaformat_enum
from . import modelsettings
from . import settings
from . import subtitles
from . import tag


@dataclass_json
@dataclass
class StartTranscriptionJobRequest:
    content_redaction: Optional[contentredaction.ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentRedaction' }})
    identify_language: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentifyLanguage' }})
    job_execution_settings: Optional[jobexecutionsettings.JobExecutionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobExecutionSettings' }})
    kms_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSEncryptionContext' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    language_options: Optional[List[languagecode_enum.LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageOptions' }})
    media: media.Media = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Media' }})
    media_format: Optional[mediaformat_enum.MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaFormat' }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSampleRateHertz' }})
    model_settings: Optional[modelsettings.ModelSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelSettings' }})
    output_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputBucketName' }})
    output_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputEncryptionKMSKeyId' }})
    output_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKey' }})
    settings: Optional[settings.Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    subtitles: Optional[subtitles.Subtitles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subtitles' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    transcription_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobName' }})
    
