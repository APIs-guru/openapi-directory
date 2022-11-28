from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateArtifactVersionMetaDataPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactVersionMetaDataRequest:
    path_params: UpdateArtifactVersionMetaDataPathParams = field()
    request: shared.EditableMetaData = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateArtifactVersionMetaDataResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
