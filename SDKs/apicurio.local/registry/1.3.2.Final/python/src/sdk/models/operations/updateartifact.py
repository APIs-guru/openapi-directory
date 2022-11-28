from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateArtifactPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
class UpdateArtifactXRegistryArtifactTypeEnum(str, Enum):
    AVRO = "AVRO"
    PROTOBUF = "PROTOBUF"
    PROTOBUF_FD = "PROTOBUF_FD"
    JSON = "JSON"
    OPENAPI = "OPENAPI"
    ASYNCAPI = "ASYNCAPI"
    GRAPHQL = "GRAPHQL"
    KCONNECT = "KCONNECT"
    WSDL = "WSDL"
    XSD = "XSD"
    XML = "XML"


@dataclass
class UpdateArtifactHeaders:
    x_registry_artifact_type: Optional[UpdateArtifactXRegistryArtifactTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactRequest:
    headers: UpdateArtifactHeaders = field()
    path_params: UpdateArtifactPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class UpdateArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
