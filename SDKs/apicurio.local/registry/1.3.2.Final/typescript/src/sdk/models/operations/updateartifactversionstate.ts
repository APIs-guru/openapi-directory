import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateArtifactVersionStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class UpdateArtifactVersionStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateArtifactVersionStatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateState;
}


export class UpdateArtifactVersionStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
