import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsCreateOrUpdateEnvironmentSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsCreateOrUpdateEnvironmentSecretRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=encrypted_value" })
  encryptedValue?: string;

  @Metadata({ data: "json, name=key_id" })
  keyId?: string;
}


export class ActionsCreateOrUpdateEnvironmentSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateOrUpdateEnvironmentSecretPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateOrUpdateEnvironmentSecretRequestBody;
}


export class ActionsCreateOrUpdateEnvironmentSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
