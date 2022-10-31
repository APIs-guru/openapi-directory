package shared




type ArtifactTypeEnum string

const (
    ArtifactTypeEnumAvro ArtifactTypeEnum = "AVRO"
ArtifactTypeEnumProtobuf ArtifactTypeEnum = "PROTOBUF"
ArtifactTypeEnumProtobufFd ArtifactTypeEnum = "PROTOBUF_FD"
ArtifactTypeEnumJSON ArtifactTypeEnum = "JSON"
ArtifactTypeEnumOpenapi ArtifactTypeEnum = "OPENAPI"
ArtifactTypeEnumAsyncapi ArtifactTypeEnum = "ASYNCAPI"
ArtifactTypeEnumGraphql ArtifactTypeEnum = "GRAPHQL"
ArtifactTypeEnumKconnect ArtifactTypeEnum = "KCONNECT"
ArtifactTypeEnumWsdl ArtifactTypeEnum = "WSDL"
ArtifactTypeEnumXsd ArtifactTypeEnum = "XSD"
ArtifactTypeEnumXML ArtifactTypeEnum = "XML"
)


