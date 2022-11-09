import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposRequestPagesBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRequestPagesBuildRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRequestPagesBuildPathParams;
}


export class ReposRequestPagesBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pageBuildStatus?: shared.PageBuildStatus;
}
