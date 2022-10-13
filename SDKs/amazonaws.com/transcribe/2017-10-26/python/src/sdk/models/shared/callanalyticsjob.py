from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import callanalyticsjobstatus_enum
from . import channeldefinition
from . import languagecode_enum
from . import media
from . import mediaformat_enum
from . import callanalyticsjobsettings
from . import transcript


@dataclass_json
@dataclass
class CallAnalyticsJob:
    call_analytics_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallAnalyticsJobName' }})
    call_analytics_job_status: Optional[callanalyticsjobstatus_enum.CallAnalyticsJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallAnalyticsJobStatus' }})
    channel_definitions: Optional[List[channeldefinition.ChannelDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelDefinitions' }})
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    identified_language_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentifiedLanguageScore' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    media: Optional[media.Media] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Media' }})
    media_format: Optional[mediaformat_enum.MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaFormat' }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSampleRateHertz' }})
    settings: Optional[callanalyticsjobsettings.CallAnalyticsJobSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transcript: Optional[transcript.Transcript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transcript' }})
    
