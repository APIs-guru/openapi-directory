package operations

import (
"openapi/pkg/models/shared")

type UpdateArtifactPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}


type UpdateArtifactXRegistryArtifactTypeEnum string

const (
    UpdateArtifactXRegistryArtifactTypeEnumAvro UpdateArtifactXRegistryArtifactTypeEnum = "AVRO"
UpdateArtifactXRegistryArtifactTypeEnumProtobuf UpdateArtifactXRegistryArtifactTypeEnum = "PROTOBUF"
UpdateArtifactXRegistryArtifactTypeEnumProtobufFd UpdateArtifactXRegistryArtifactTypeEnum = "PROTOBUF_FD"
UpdateArtifactXRegistryArtifactTypeEnumJSON UpdateArtifactXRegistryArtifactTypeEnum = "JSON"
UpdateArtifactXRegistryArtifactTypeEnumOpenapi UpdateArtifactXRegistryArtifactTypeEnum = "OPENAPI"
UpdateArtifactXRegistryArtifactTypeEnumAsyncapi UpdateArtifactXRegistryArtifactTypeEnum = "ASYNCAPI"
UpdateArtifactXRegistryArtifactTypeEnumGraphql UpdateArtifactXRegistryArtifactTypeEnum = "GRAPHQL"
UpdateArtifactXRegistryArtifactTypeEnumKconnect UpdateArtifactXRegistryArtifactTypeEnum = "KCONNECT"
UpdateArtifactXRegistryArtifactTypeEnumWsdl UpdateArtifactXRegistryArtifactTypeEnum = "WSDL"
UpdateArtifactXRegistryArtifactTypeEnumXsd UpdateArtifactXRegistryArtifactTypeEnum = "XSD"
UpdateArtifactXRegistryArtifactTypeEnumXML UpdateArtifactXRegistryArtifactTypeEnum = "XML"
)


type UpdateArtifactHeaders struct {
    XRegistryArtifactType *UpdateArtifactXRegistryArtifactTypeEnum `header:"style=simple,explode=false,name=X-Registry-ArtifactType"`
    
}

type UpdateArtifactRequest struct {
    PathParams UpdateArtifactPathParams 
    Headers UpdateArtifactHeaders 
    Request []byte `request:"mediaType=*/*"`
    
}

type UpdateArtifactResponse struct {
    ArtifactMetaData *shared.ArtifactMetaData 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

