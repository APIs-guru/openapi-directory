import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateArtifactStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class UpdateArtifactStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateArtifactStatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateState;
}


export class UpdateArtifactStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
