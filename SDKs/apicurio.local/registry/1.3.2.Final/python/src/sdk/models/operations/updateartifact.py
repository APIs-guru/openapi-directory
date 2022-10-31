from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class UpdateArtifactPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
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
    path_params: UpdateArtifactPathParams = field(default=None)
    headers: UpdateArtifactHeaders = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class UpdateArtifactResponse:
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
