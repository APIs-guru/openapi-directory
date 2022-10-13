from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import applicationstatus_enum
from . import cloudwatchloggingoptiondescription
from . import inputdescription
from . import outputdescription
from . import referencedatasourcedescription


@dataclass_json
@dataclass
class ApplicationDetail:
    application_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationCode' }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationDescription' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    application_status: applicationstatus_enum.ApplicationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStatus' }})
    application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    cloud_watch_logging_option_descriptions: Optional[List[cloudwatchloggingoptiondescription.CloudWatchLoggingOptionDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionDescriptions' }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_descriptions: Optional[List[inputdescription.InputDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDescriptions' }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_descriptions: Optional[List[outputdescription.OutputDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDescriptions' }})
    reference_data_source_descriptions: Optional[List[referencedatasourcedescription.ReferenceDataSourceDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceDataSourceDescriptions' }})
    
