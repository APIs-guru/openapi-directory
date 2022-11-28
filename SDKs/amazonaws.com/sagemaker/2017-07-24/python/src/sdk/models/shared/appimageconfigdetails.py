from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppImageConfigDetails:
    r"""AppImageConfigDetails
    The configuration for running a SageMaker image as a KernelGateway app.
    """
    
    app_image_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppImageConfigArn') }})
    app_image_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppImageConfigName') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kernel_gateway_image_config: Optional[KernelGatewayImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KernelGatewayImageConfig') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
