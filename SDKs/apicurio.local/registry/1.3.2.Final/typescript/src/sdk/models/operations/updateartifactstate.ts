import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateArtifactStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class UpdateArtifactStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateArtifactStatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateState;
}


export class UpdateArtifactStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
