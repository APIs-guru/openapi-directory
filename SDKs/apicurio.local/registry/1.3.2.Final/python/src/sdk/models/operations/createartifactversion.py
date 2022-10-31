from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CreateArtifactVersionPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
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
    path_params: CreateArtifactVersionPathParams = field(default=None)
    headers: CreateArtifactVersionHeaders = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class CreateArtifactVersionResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    version_meta_data: Optional[shared.VersionMetaData] = field(default=None)
    
