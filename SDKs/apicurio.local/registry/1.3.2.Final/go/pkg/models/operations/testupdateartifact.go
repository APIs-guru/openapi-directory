package operations

import (
"openapi/pkg/models/shared")

type TestUpdateArtifactPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}


type TestUpdateArtifactXRegistryArtifactTypeEnum string

const (
    TestUpdateArtifactXRegistryArtifactTypeEnumAvro TestUpdateArtifactXRegistryArtifactTypeEnum = "AVRO"
TestUpdateArtifactXRegistryArtifactTypeEnumProtobuf TestUpdateArtifactXRegistryArtifactTypeEnum = "PROTOBUF"
TestUpdateArtifactXRegistryArtifactTypeEnumProtobufFd TestUpdateArtifactXRegistryArtifactTypeEnum = "PROTOBUF_FD"
TestUpdateArtifactXRegistryArtifactTypeEnumJSON TestUpdateArtifactXRegistryArtifactTypeEnum = "JSON"
TestUpdateArtifactXRegistryArtifactTypeEnumOpenapi TestUpdateArtifactXRegistryArtifactTypeEnum = "OPENAPI"
TestUpdateArtifactXRegistryArtifactTypeEnumAsyncapi TestUpdateArtifactXRegistryArtifactTypeEnum = "ASYNCAPI"
TestUpdateArtifactXRegistryArtifactTypeEnumGraphql TestUpdateArtifactXRegistryArtifactTypeEnum = "GRAPHQL"
TestUpdateArtifactXRegistryArtifactTypeEnumKconnect TestUpdateArtifactXRegistryArtifactTypeEnum = "KCONNECT"
TestUpdateArtifactXRegistryArtifactTypeEnumWsdl TestUpdateArtifactXRegistryArtifactTypeEnum = "WSDL"
TestUpdateArtifactXRegistryArtifactTypeEnumXsd TestUpdateArtifactXRegistryArtifactTypeEnum = "XSD"
TestUpdateArtifactXRegistryArtifactTypeEnumXML TestUpdateArtifactXRegistryArtifactTypeEnum = "XML"
)


type TestUpdateArtifactHeaders struct {
    XRegistryArtifactType *TestUpdateArtifactXRegistryArtifactTypeEnum `header:"style=simple,explode=false,name=X-Registry-ArtifactType"`
    
}

type TestUpdateArtifactRequest struct {
    PathParams TestUpdateArtifactPathParams 
    Headers TestUpdateArtifactHeaders 
    Request []byte `request:"mediaType=*/*"`
    
}

type TestUpdateArtifactResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

