from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class TestUpdateArtifactPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
class TestUpdateArtifactXRegistryArtifactTypeEnum(str, Enum):
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
class TestUpdateArtifactHeaders:
    x_registry_artifact_type: Optional[TestUpdateArtifactXRegistryArtifactTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType' }})
    

@dataclass
class TestUpdateArtifactRequest:
    path_params: TestUpdateArtifactPathParams = field(default=None)
    headers: TestUpdateArtifactHeaders = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class TestUpdateArtifactResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
