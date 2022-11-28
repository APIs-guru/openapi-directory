from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DimensionKeyAnnotation:
    r"""DimensionKeyAnnotation
    This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be listing_title or listing_quantity_sold.
    """
    
    annotation_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationKey') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    
