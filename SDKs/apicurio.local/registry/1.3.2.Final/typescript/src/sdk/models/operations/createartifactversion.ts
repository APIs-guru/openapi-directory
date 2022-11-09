import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateArtifactVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}

export enum CreateArtifactVersionXRegistryArtifactTypeEnum {
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


export class CreateArtifactVersionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: CreateArtifactVersionXRegistryArtifactTypeEnum;
}


export class CreateArtifactVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateArtifactVersionPathParams;

  @Metadata()
  headers: CreateArtifactVersionHeaders;

  @Metadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class CreateArtifactVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  versionMetaData?: shared.VersionMetaData;
}
