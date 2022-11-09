import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetLatestPagesBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetLatestPagesBuildRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetLatestPagesBuildPathParams;
}


export class ReposGetLatestPagesBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pageBuild?: shared.PageBuild;
}
