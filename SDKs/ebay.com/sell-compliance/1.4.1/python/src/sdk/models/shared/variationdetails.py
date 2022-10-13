from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namevaluelist


@dataclass_json
@dataclass
class VariationDetails:
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    variation_aspects: Optional[List[namevaluelist.NameValueList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variationAspects' }})
    
