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
class ApplicationDetail:
    r"""ApplicationDetail
    <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href=\"/kinesisanalytics/latest/apiv2/Welcome.html\">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
    """
    
    application_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_status: ApplicationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    application_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCode') }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    cloud_watch_logging_option_descriptions: Optional[List[CloudWatchLoggingOptionDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionDescriptions') }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_descriptions: Optional[List[InputDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDescriptions') }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_descriptions: Optional[List[OutputDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDescriptions') }})
    reference_data_source_descriptions: Optional[List[ReferenceDataSourceDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceDescriptions') }})
    
