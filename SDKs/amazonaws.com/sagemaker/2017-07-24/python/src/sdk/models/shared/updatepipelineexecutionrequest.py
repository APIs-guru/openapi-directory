from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdatePipelineExecutionRequest:
    pipeline_execution_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineExecutionArn') }})
    pipeline_execution_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineExecutionDescription') }})
    pipeline_execution_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineExecutionDisplayName') }})
    
