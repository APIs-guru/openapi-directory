import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare enum UpdateArtifactXRegistryArtifactTypeEnum {
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
export declare class UpdateArtifactHeaders extends SpeakeasyBase {
    xRegistryArtifactType?: UpdateArtifactXRegistryArtifactTypeEnum;
}
export declare class UpdateArtifactRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactPathParams;
    headers: UpdateArtifactHeaders;
    request: Uint8Array;
}
export declare class UpdateArtifactResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
