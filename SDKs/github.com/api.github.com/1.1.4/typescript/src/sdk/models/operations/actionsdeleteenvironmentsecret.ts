import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDeleteEnvironmentSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsDeleteEnvironmentSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDeleteEnvironmentSecretPathParams;
}


export class ActionsDeleteEnvironmentSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
