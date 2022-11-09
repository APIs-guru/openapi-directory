import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectBuildNumPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectBuildNumRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectBuildNumPathParams;
}


export class GetProjectUsernameProjectBuildNumResponse extends SpeakeasyBase {
  @Metadata()
  buildDetail?: shared.BuildDetail;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
