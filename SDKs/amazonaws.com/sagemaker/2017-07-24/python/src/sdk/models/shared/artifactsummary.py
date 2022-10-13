from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import artifactsource


@dataclass_json
@dataclass
class ArtifactSummary:
    artifact_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactArn' }})
    artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactName' }})
    artifact_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[artifactsource.ArtifactSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
