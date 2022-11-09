import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetArtifactMetaDataByContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class GetArtifactMetaDataByContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactMetaDataByContentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Uint8Array;
}


export class GetArtifactMetaDataByContentResponse extends SpeakeasyBase {
  @Metadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
