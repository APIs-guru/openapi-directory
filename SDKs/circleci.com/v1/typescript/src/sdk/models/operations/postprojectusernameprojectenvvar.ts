import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProjectUsernameProjectEnvvarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectUsernameProjectEnvvarPathParams;
}


export class PostProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  envvar?: shared.Envvar;

  @SpeakeasyMetadata()
  statusCode: number;
}
