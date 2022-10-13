from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import medicalcontentidentificationtype_enum
from . import languagecode_enum
from . import media
from . import mediaformat_enum
from . import medicaltranscriptionsetting
from . import specialty_enum
from . import tag
from . import type_enum


@dataclass_json
@dataclass
class StartMedicalTranscriptionJobRequest:
    content_identification_type: Optional[medicalcontentidentificationtype_enum.MedicalContentIdentificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentIdentificationType' }})
    kms_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSEncryptionContext' }})
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    media: media.Media = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Media' }})
    media_format: Optional[mediaformat_enum.MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaFormat' }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSampleRateHertz' }})
    medical_transcription_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MedicalTranscriptionJobName' }})
    output_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputBucketName' }})
    output_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputEncryptionKMSKeyId' }})
    output_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKey' }})
    settings: Optional[medicaltranscriptionsetting.MedicalTranscriptionSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    specialty: specialty_enum.SpecialtyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Specialty' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: type_enum.TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
