import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposRequestPagesBuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRequestPagesBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposRequestPagesBuildPathParams;
}


export class ReposRequestPagesBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pageBuildStatus?: shared.PageBuildStatus;
}
