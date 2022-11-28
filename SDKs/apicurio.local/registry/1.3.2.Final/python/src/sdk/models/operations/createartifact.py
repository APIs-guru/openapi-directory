from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class CreateArtifactIfExistsEnum(str, Enum):
    FAIL = "FAIL"
    UPDATE = "UPDATE"
    RETURN = "RETURN"
    RETURN_OR_UPDATE = "RETURN_OR_UPDATE"


@dataclass
class CreateArtifactQueryParams:
    if_exists: Optional[CreateArtifactIfExistsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ifExists', 'style': 'form', 'explode': True }})
    
class CreateArtifactXRegistryArtifactTypeEnum(str, Enum):
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
class CreateArtifactHeaders:
    x_registry_artifact_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactId', 'style': 'simple', 'explode': False }})
    x_registry_artifact_type: Optional[CreateArtifactXRegistryArtifactTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateArtifactRequest:
    headers: CreateArtifactHeaders = field()
    query_params: CreateArtifactQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class CreateArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
