import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateArtifactMetaDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class UpdateArtifactMetaDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateArtifactMetaDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class UpdateArtifactMetaDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
