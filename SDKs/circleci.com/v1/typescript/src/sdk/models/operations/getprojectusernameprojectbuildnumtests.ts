import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectUsernameProjectBuildNumTestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectBuildNumTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectUsernameProjectBuildNumTestsPathParams;
}


export class GetProjectUsernameProjectBuildNumTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tests?: shared.Tests;
}
