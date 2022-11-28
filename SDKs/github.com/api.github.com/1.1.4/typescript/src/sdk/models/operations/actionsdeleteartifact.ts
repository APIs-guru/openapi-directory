import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDeleteArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact_id" })
  artifactId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsDeleteArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDeleteArtifactPathParams;
}


export class ActionsDeleteArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
