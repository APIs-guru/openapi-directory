import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteEnvironmentSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsDeleteEnvironmentSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteEnvironmentSecretPathParams;
}


export class ActionsDeleteEnvironmentSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
