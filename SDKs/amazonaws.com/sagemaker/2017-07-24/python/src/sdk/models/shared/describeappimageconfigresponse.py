from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import kernelgatewayimageconfig


@dataclass_json
@dataclass
class DescribeAppImageConfigResponse:
    app_image_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppImageConfigArn' }})
    app_image_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppImageConfigName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kernel_gateway_image_config: Optional[kernelgatewayimageconfig.KernelGatewayImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KernelGatewayImageConfig' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
