import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateArtifactIfExistsEnum {
    Fail = "FAIL"
,    Update = "UPDATE"
,    Return = "RETURN"
,    ReturnOrUpdate = "RETURN_OR_UPDATE"
}


export class CreateArtifactQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ifExists" })
  ifExists?: CreateArtifactIfExistsEnum;
}

export enum CreateArtifactXRegistryArtifactTypeEnum {
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


export class CreateArtifactHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactId" })
  xRegistryArtifactId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: CreateArtifactXRegistryArtifactTypeEnum;
}


export class CreateArtifactRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateArtifactQueryParams;

  @Metadata()
  headers: CreateArtifactHeaders;

  @Metadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class CreateArtifactResponse extends SpeakeasyBase {
  @Metadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
