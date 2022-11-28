import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArtifactMetaDataByContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class GetArtifactMetaDataByContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactMetaDataByContentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Uint8Array;
}


export class GetArtifactMetaDataByContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
