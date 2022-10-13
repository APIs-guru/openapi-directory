from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import algorithmstatus_enum
from . import algorithmstatusdetails
from . import inferencespecification
from . import trainingspecification
from . import algorithmvalidationspecification


@dataclass_json
@dataclass
class DescribeAlgorithmOutput:
    algorithm_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmArn' }})
    algorithm_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmDescription' }})
    algorithm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmName' }})
    algorithm_status: algorithmstatus_enum.AlgorithmStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmStatus' }})
    algorithm_status_details: algorithmstatusdetails.AlgorithmStatusDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmStatusDetails' }})
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertifyForMarketplace' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inference_specification: Optional[inferencespecification.InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSpecification' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    training_specification: trainingspecification.TrainingSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingSpecification' }})
    validation_specification: Optional[algorithmvalidationspecification.AlgorithmValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationSpecification' }})
    
