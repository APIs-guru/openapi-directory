from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    filter_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterAlias' }})
    filterable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterable' }})
    groupable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupable' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
