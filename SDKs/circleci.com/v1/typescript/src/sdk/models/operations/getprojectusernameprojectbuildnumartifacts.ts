import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectBuildNumArtifactsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectBuildNumArtifactsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectBuildNumArtifactsPathParams;
}


export class GetProjectUsernameProjectBuildNumArtifactsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Artifact })
  artifacts?: shared.Artifact[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
