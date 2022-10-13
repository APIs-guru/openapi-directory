from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import featuretransformation


@dataclass_json
@dataclass
class DescribeFeatureTransformationResponse:
    feature_transformation: Optional[featuretransformation.FeatureTransformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureTransformation' }})
    
