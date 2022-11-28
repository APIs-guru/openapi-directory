import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectUsernameProjectEnvvarNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectUsernameProjectEnvvarNamePathParams;
}


export class GetProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  envvar?: shared.Envvar;

  @SpeakeasyMetadata()
  statusCode: number;
}
