import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateArtifactIfExistsEnum {
    Fail = "FAIL",
    Update = "UPDATE",
    Return = "RETURN",
    ReturnOrUpdate = "RETURN_OR_UPDATE"
}
export declare class CreateArtifactQueryParams extends SpeakeasyBase {
    ifExists?: CreateArtifactIfExistsEnum;
}
export declare enum CreateArtifactXRegistryArtifactTypeEnum {
    Avro = "AVRO",
    Protobuf = "PROTOBUF",
    ProtobufFd = "PROTOBUF_FD",
    Json = "JSON",
    Openapi = "OPENAPI",
    Asyncapi = "ASYNCAPI",
    Graphql = "GRAPHQL",
    Kconnect = "KCONNECT",
    Wsdl = "WSDL",
    Xsd = "XSD",
    Xml = "XML"
}
export declare class CreateArtifactHeaders extends SpeakeasyBase {
    xRegistryArtifactId?: string;
    xRegistryArtifactType?: CreateArtifactXRegistryArtifactTypeEnum;
}
export declare class CreateArtifactRequest extends SpeakeasyBase {
    queryParams: CreateArtifactQueryParams;
    headers: CreateArtifactHeaders;
    request: Uint8Array;
}
export declare class CreateArtifactResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
