from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionMetadata:
    r"""DimensionMetadata
    This type defines the dimension used to create the report and the annotation keys associated with that dimension.
    """
    
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    dimension_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKey') }})
    dimension_key_annotations: Optional[List[DimensionKeyAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKeyAnnotations') }})
    
