from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CallAnalyticsJob:
    r"""CallAnalyticsJob
    Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code> operation.
    """
    
    call_analytics_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobName') }})
    call_analytics_job_status: Optional[CallAnalyticsJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobStatus') }})
    channel_definitions: Optional[List[ChannelDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelDefinitions') }})
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    identified_language_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifiedLanguageScore') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    media: Optional[Media] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    media_format: Optional[MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    settings: Optional[CallAnalyticsJobSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transcript: Optional[Transcript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    
