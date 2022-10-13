from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inferencespecification
from . import tag
from . import trainingspecification
from . import algorithmvalidationspecification


@dataclass_json
@dataclass
class CreateAlgorithmInput:
    algorithm_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmDescription' }})
    algorithm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmName' }})
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertifyForMarketplace' }})
    inference_specification: Optional[inferencespecification.InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSpecification' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    training_specification: trainingspecification.TrainingSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingSpecification' }})
    validation_specification: Optional[algorithmvalidationspecification.AlgorithmValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationSpecification' }})
    
