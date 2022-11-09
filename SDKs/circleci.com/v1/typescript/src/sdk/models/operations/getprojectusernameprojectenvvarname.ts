import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectEnvvarNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectEnvvarNamePathParams;
}


export class GetProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  envvar?: shared.Envvar;

  @Metadata()
  statusCode: number;
}
