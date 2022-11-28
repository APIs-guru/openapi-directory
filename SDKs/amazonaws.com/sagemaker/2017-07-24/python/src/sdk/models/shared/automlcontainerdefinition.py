from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoMlContainerDefinition:
    r"""AutoMlContainerDefinition
    A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see .
    """
    
    image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    model_data_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDataUrl') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    
