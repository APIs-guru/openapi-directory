from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationSummary:
    r"""ApplicationSummary
    <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href=\"/kinesisanalytics/latest/apiv2/Welcome.html\">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
    """
    
    application_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_status: ApplicationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    
