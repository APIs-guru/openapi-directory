from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpsaasplatforminsightsv1alpharowfieldval


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow:
    field_values: Optional[List[googlecloudbeyondcorpsaasplatforminsightsv1alpharowfieldval.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldValues' }})
    
