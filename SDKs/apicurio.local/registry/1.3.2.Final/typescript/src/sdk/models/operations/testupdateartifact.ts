import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestUpdateArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}

export enum TestUpdateArtifactXRegistryArtifactTypeEnum {
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


export class TestUpdateArtifactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: TestUpdateArtifactXRegistryArtifactTypeEnum;
}


export class TestUpdateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestUpdateArtifactPathParams;

  @SpeakeasyMetadata()
  headers: TestUpdateArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class TestUpdateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
