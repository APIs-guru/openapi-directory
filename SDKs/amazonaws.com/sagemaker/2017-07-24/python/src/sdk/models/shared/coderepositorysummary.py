from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitconfig


@dataclass_json
@dataclass
class CodeRepositorySummary:
    code_repository_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeRepositoryArn' }})
    code_repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeRepositoryName' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    git_config: Optional[gitconfig.GitConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GitConfig' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
