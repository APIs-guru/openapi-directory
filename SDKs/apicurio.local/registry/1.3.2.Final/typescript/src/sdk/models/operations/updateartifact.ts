import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}

export enum UpdateArtifactXRegistryArtifactTypeEnum {
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


export class UpdateArtifactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: UpdateArtifactXRegistryArtifactTypeEnum;
}


export class UpdateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateArtifactPathParams;

  @SpeakeasyMetadata()
  headers: UpdateArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class UpdateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
