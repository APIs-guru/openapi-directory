import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProjectUsernameProjectEnvvarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectUsernameProjectEnvvarPathParams;
}


export class PostProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  envvar?: shared.Envvar;

  @Metadata()
  statusCode: number;
}
