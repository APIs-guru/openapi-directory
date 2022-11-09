import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetEnvironmentSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsGetEnvironmentSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetEnvironmentSecretPathParams;
}


export class ActionsGetEnvironmentSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsSecret?: shared.ActionsSecret;
}
