import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectBuildNumTestsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectBuildNumTestsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectBuildNumTestsPathParams;
}


export class GetProjectUsernameProjectBuildNumTestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tests?: shared.Tests;
}
