import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateArtifactVersionPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare enum CreateArtifactVersionXRegistryArtifactTypeEnum {
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
export declare class CreateArtifactVersionHeaders extends SpeakeasyBase {
    xRegistryArtifactType?: CreateArtifactVersionXRegistryArtifactTypeEnum;
}
export declare class CreateArtifactVersionRequest extends SpeakeasyBase {
    pathParams: CreateArtifactVersionPathParams;
    headers: CreateArtifactVersionHeaders;
    request: Uint8Array;
}
export declare class CreateArtifactVersionResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    versionMetaData?: shared.VersionMetaData;
}
