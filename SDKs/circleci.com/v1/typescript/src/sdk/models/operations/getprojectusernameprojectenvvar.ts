import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectEnvvarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectEnvvarPathParams;
}


export class GetProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Envvar })
  envvars?: shared.Envvar[];

  @Metadata()
  statusCode: number;
}
