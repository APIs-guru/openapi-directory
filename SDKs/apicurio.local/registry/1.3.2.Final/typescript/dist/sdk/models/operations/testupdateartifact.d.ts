import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestUpdateArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare enum TestUpdateArtifactXRegistryArtifactTypeEnum {
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
export declare class TestUpdateArtifactHeaders extends SpeakeasyBase {
    xRegistryArtifactType?: TestUpdateArtifactXRegistryArtifactTypeEnum;
}
export declare class TestUpdateArtifactRequest extends SpeakeasyBase {
    pathParams: TestUpdateArtifactPathParams;
    headers: TestUpdateArtifactHeaders;
    request: Uint8Array;
}
export declare class TestUpdateArtifactResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
