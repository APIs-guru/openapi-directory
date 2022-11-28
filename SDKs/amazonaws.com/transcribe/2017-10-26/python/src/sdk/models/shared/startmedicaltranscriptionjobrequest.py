from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartMedicalTranscriptionJobRequest:
    language_code: LanguageCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    media: Media = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    medical_transcription_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJobName') }})
    output_bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucketName') }})
    specialty: SpecialtyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Specialty') }})
    type: TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    content_identification_type: Optional[MedicalContentIdentificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentIdentificationType') }})
    kms_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSEncryptionContext') }})
    media_format: Optional[MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    output_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputEncryptionKMSKeyId') }})
    output_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKey') }})
    settings: Optional[MedicalTranscriptionSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
