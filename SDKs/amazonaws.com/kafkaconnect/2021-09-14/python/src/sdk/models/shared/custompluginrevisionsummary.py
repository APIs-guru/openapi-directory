from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import customplugincontenttype_enum
from . import custompluginfiledescription
from . import custompluginlocationdescription


@dataclass_json
@dataclass
class CustomPluginRevisionSummary:
    content_type: Optional[customplugincontenttype_enum.CustomPluginContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    file_description: Optional[custompluginfiledescription.CustomPluginFileDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileDescription' }})
    location: Optional[custompluginlocationdescription.CustomPluginLocationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
