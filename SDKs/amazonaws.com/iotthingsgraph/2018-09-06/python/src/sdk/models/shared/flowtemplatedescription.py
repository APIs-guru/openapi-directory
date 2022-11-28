from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlowTemplateDescription:
    r"""FlowTemplateDescription
    An object that contains a workflow's definition and summary information.
    """
    
    definition: Optional[DefinitionDocument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    summary: Optional[FlowTemplateSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    validated_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedNamespaceVersion') }})
    
