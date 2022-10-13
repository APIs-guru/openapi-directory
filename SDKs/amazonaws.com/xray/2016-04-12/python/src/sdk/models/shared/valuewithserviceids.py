from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotationvalue
from . import serviceid


@dataclass_json
@dataclass
class ValueWithServiceIds:
    annotation_value: Optional[annotationvalue.AnnotationValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnotationValue' }})
    service_ids: Optional[List[serviceid.ServiceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceIds' }})
    
