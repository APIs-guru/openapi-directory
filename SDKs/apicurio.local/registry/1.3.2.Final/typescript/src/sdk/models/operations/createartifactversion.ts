import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateArtifactVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}

export enum CreateArtifactVersionXRegistryArtifactTypeEnum {
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


export class CreateArtifactVersionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: CreateArtifactVersionXRegistryArtifactTypeEnum;
}


export class CreateArtifactVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateArtifactVersionPathParams;

  @SpeakeasyMetadata()
  headers: CreateArtifactVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class CreateArtifactVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMetaData?: shared.VersionMetaData;
}
