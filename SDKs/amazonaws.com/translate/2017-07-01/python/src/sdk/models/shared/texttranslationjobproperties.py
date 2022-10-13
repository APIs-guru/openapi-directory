from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import jobdetails
from . import jobstatus_enum
from . import outputdataconfig


@dataclass_json
@dataclass
class TextTranslationJobProperties:
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: Optional[inputdataconfig.InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_details: Optional[jobdetails.JobDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDetails' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    output_data_config: Optional[outputdataconfig.OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    parallel_data_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelDataNames' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLanguageCode' }})
    submitted_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmittedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLanguageCodes' }})
    terminology_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyNames' }})
    
