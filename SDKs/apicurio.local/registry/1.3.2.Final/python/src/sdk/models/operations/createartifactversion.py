from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CreateArtifactVersionPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
class CreateArtifactVersionXRegistryArtifactTypeEnum(str, Enum):
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
class CreateArtifactVersionHeaders:
    x_registry_artifact_type: Optional[CreateArtifactVersionXRegistryArtifactTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateArtifactVersionRequest:
    headers: CreateArtifactVersionHeaders = field()
    path_params: CreateArtifactVersionPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class CreateArtifactVersionResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    version_meta_data: Optional[shared.VersionMetaData] = field(default=None)
    
