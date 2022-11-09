import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDownloadArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=archive_format" })
  archiveFormat: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact_id" })
  artifactId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsDownloadArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDownloadArtifactPathParams;
}


export class ActionsDownloadArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
