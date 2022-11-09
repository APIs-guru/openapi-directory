import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}

export enum UpdateArtifactXRegistryArtifactTypeEnum {
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


export class UpdateArtifactHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: UpdateArtifactXRegistryArtifactTypeEnum;
}


export class UpdateArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateArtifactPathParams;

  @Metadata()
  headers: UpdateArtifactHeaders;

  @Metadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class UpdateArtifactResponse extends SpeakeasyBase {
  @Metadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
