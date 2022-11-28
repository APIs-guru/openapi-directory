from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateArtifactMetaDataPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactMetaDataRequest:
    path_params: UpdateArtifactMetaDataPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class UpdateArtifactMetaDataResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
