import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsCreateOrUpdateRepoSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsCreateOrUpdateRepoSecretRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=encrypted_value" })
  encryptedValue?: string;

  @Metadata({ data: "json, name=key_id" })
  keyId?: string;
}


export class ActionsCreateOrUpdateRepoSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateOrUpdateRepoSecretPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateOrUpdateRepoSecretRequestBody;
}


export class ActionsCreateOrUpdateRepoSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsCreateOrUpdateRepoSecret201ApplicationJsonObject?: Map<string, any>;
}
