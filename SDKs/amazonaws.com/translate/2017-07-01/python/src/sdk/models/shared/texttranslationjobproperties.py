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
class TextTranslationJobProperties:
    r"""TextTranslationJobProperties
    Provides information about a translation job.
    """
    
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: Optional[InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    job_details: Optional[JobDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDetails') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    output_data_config: Optional[OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    parallel_data_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelDataNames') }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLanguageCode') }})
    submitted_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmittedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLanguageCodes') }})
    terminology_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyNames') }})
    
