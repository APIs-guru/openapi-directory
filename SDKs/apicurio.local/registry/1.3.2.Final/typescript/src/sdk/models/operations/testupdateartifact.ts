import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestUpdateArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}

export enum TestUpdateArtifactXRegistryArtifactTypeEnum {
    Avro = "AVRO"
,    Protobuf = "PROTOBUF"
,    ProtobufFd = "PROTOBUF_FD"
,    Json = "JSON"
,    Openapi = "OPENAPI"
,    Asyncapi = "ASYNCAPI"
,    Graphql = "GRAPHQL"
,    Kconnect = "KCONNECT"
,    Wsdl = "WSDL"
,    Xsd = "XSD"
,    Xml = "XML"
}


export class TestUpdateArtifactHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: TestUpdateArtifactXRegistryArtifactTypeEnum;
}


export class TestUpdateArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestUpdateArtifactPathParams;

  @Metadata()
  headers: TestUpdateArtifactHeaders;

  @Metadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class TestUpdateArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
