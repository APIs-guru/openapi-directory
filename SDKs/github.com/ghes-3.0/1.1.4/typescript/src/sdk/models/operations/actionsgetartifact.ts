import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact_id" })
  artifactId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetArtifactPathParams;
}


export class ActionsGetArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  artifact?: shared.Artifact;
}
