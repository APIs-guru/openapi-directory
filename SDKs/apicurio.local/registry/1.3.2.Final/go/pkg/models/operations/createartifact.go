package operations

import (
"openapi/pkg/models/shared")


type CreateArtifactIfExistsEnum string

const (
    CreateArtifactIfExistsEnumFail CreateArtifactIfExistsEnum = "FAIL"
CreateArtifactIfExistsEnumUpdate CreateArtifactIfExistsEnum = "UPDATE"
CreateArtifactIfExistsEnumReturn CreateArtifactIfExistsEnum = "RETURN"
CreateArtifactIfExistsEnumReturnOrUpdate CreateArtifactIfExistsEnum = "RETURN_OR_UPDATE"
)


type CreateArtifactQueryParams struct {
    IfExists *CreateArtifactIfExistsEnum `queryParam:"style=form,explode=true,name=ifExists"`
    
}


type CreateArtifactXRegistryArtifactTypeEnum string

const (
    CreateArtifactXRegistryArtifactTypeEnumAvro CreateArtifactXRegistryArtifactTypeEnum = "AVRO"
CreateArtifactXRegistryArtifactTypeEnumProtobuf CreateArtifactXRegistryArtifactTypeEnum = "PROTOBUF"
CreateArtifactXRegistryArtifactTypeEnumProtobufFd CreateArtifactXRegistryArtifactTypeEnum = "PROTOBUF_FD"
CreateArtifactXRegistryArtifactTypeEnumJSON CreateArtifactXRegistryArtifactTypeEnum = "JSON"
CreateArtifactXRegistryArtifactTypeEnumOpenapi CreateArtifactXRegistryArtifactTypeEnum = "OPENAPI"
CreateArtifactXRegistryArtifactTypeEnumAsyncapi CreateArtifactXRegistryArtifactTypeEnum = "ASYNCAPI"
CreateArtifactXRegistryArtifactTypeEnumGraphql CreateArtifactXRegistryArtifactTypeEnum = "GRAPHQL"
CreateArtifactXRegistryArtifactTypeEnumKconnect CreateArtifactXRegistryArtifactTypeEnum = "KCONNECT"
CreateArtifactXRegistryArtifactTypeEnumWsdl CreateArtifactXRegistryArtifactTypeEnum = "WSDL"
CreateArtifactXRegistryArtifactTypeEnumXsd CreateArtifactXRegistryArtifactTypeEnum = "XSD"
CreateArtifactXRegistryArtifactTypeEnumXML CreateArtifactXRegistryArtifactTypeEnum = "XML"
)


type CreateArtifactHeaders struct {
    XRegistryArtifactID *string `header:"style=simple,explode=false,name=X-Registry-ArtifactId"`
    XRegistryArtifactType *CreateArtifactXRegistryArtifactTypeEnum `header:"style=simple,explode=false,name=X-Registry-ArtifactType"`
    
}

type CreateArtifactRequest struct {
    QueryParams CreateArtifactQueryParams 
    Headers CreateArtifactHeaders 
    Request []byte `request:"mediaType=*/*"`
    
}

type CreateArtifactResponse struct {
    ArtifactMetaData *shared.ArtifactMetaData 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

