import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsCreateOrUpdateEnvironmentSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsCreateOrUpdateEnvironmentSecretRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encrypted_value" })
  encryptedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId?: string;
}


export class ActionsCreateOrUpdateEnvironmentSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCreateOrUpdateEnvironmentSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateOrUpdateEnvironmentSecretRequestBody;
}


export class ActionsCreateOrUpdateEnvironmentSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
