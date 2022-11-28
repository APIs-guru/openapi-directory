import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectUsernameProjectEnvvarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectUsernameProjectEnvvarPathParams;
}


export class GetProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Envvar })
  envvars?: shared.Envvar[];

  @SpeakeasyMetadata()
  statusCode: number;
}
