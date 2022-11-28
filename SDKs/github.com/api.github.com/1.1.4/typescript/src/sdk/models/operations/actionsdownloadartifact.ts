import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDownloadArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archive_format" })
  archiveFormat: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact_id" })
  artifactId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsDownloadArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDownloadArtifactPathParams;
}


export class ActionsDownloadArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
