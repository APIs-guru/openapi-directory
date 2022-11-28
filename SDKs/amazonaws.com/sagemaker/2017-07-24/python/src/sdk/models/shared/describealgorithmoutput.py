from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAlgorithmOutput:
    algorithm_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    algorithm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmName') }})
    algorithm_status: AlgorithmStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmStatus') }})
    algorithm_status_details: AlgorithmStatusDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmStatusDetails') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_specification: TrainingSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingSpecification') }})
    algorithm_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmDescription') }})
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertifyForMarketplace') }})
    inference_specification: Optional[InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSpecification') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    validation_specification: Optional[AlgorithmValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationSpecification') }})
    
