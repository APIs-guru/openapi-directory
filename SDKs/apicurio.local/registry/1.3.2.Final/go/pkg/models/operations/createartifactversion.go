package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArtifactVersionPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
}

type CreateArtifactVersionXRegistryArtifactTypeEnum string

const (
	CreateArtifactVersionXRegistryArtifactTypeEnumAvro       CreateArtifactVersionXRegistryArtifactTypeEnum = "AVRO"
	CreateArtifactVersionXRegistryArtifactTypeEnumProtobuf   CreateArtifactVersionXRegistryArtifactTypeEnum = "PROTOBUF"
	CreateArtifactVersionXRegistryArtifactTypeEnumProtobufFd CreateArtifactVersionXRegistryArtifactTypeEnum = "PROTOBUF_FD"
	CreateArtifactVersionXRegistryArtifactTypeEnumJSON       CreateArtifactVersionXRegistryArtifactTypeEnum = "JSON"
	CreateArtifactVersionXRegistryArtifactTypeEnumOpenapi    CreateArtifactVersionXRegistryArtifactTypeEnum = "OPENAPI"
	CreateArtifactVersionXRegistryArtifactTypeEnumAsyncapi   CreateArtifactVersionXRegistryArtifactTypeEnum = "ASYNCAPI"
	CreateArtifactVersionXRegistryArtifactTypeEnumGraphql    CreateArtifactVersionXRegistryArtifactTypeEnum = "GRAPHQL"
	CreateArtifactVersionXRegistryArtifactTypeEnumKconnect   CreateArtifactVersionXRegistryArtifactTypeEnum = "KCONNECT"
	CreateArtifactVersionXRegistryArtifactTypeEnumWsdl       CreateArtifactVersionXRegistryArtifactTypeEnum = "WSDL"
	CreateArtifactVersionXRegistryArtifactTypeEnumXsd        CreateArtifactVersionXRegistryArtifactTypeEnum = "XSD"
	CreateArtifactVersionXRegistryArtifactTypeEnumXML        CreateArtifactVersionXRegistryArtifactTypeEnum = "XML"
)

type CreateArtifactVersionHeaders struct {
	XRegistryArtifactType *CreateArtifactVersionXRegistryArtifactTypeEnum `header:"name=X-Registry-ArtifactType"`
}

type CreateArtifactVersionRequest struct {
	PathParams CreateArtifactVersionPathParams
	Headers    CreateArtifactVersionHeaders
	Request    []byte `request:"mediaType=*/*"`
}

type CreateArtifactVersionResponse struct {
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
	VersionMetaData *shared.VersionMetaData
}
