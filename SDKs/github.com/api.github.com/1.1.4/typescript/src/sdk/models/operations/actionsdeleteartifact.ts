import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact_id" })
  artifactId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsDeleteArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteArtifactPathParams;
}


export class ActionsDeleteArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
