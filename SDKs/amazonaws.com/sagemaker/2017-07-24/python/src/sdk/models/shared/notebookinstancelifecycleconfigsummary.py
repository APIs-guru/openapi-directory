from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotebookInstanceLifecycleConfigSummary:
    r"""NotebookInstanceLifecycleConfigSummary
    Provides a summary of a notebook instance lifecycle configuration.
    """
    
    notebook_instance_lifecycle_config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceLifecycleConfigArn') }})
    notebook_instance_lifecycle_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceLifecycleConfigName') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
