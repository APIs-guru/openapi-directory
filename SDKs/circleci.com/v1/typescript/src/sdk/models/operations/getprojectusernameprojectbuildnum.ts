import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectUsernameProjectBuildNumPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectBuildNumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectUsernameProjectBuildNumPathParams;
}


export class GetProjectUsernameProjectBuildNumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  buildDetail?: shared.BuildDetail;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
