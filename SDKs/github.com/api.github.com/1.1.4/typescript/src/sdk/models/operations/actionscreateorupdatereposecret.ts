import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsCreateOrUpdateRepoSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsCreateOrUpdateRepoSecretRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encrypted_value" })
  encryptedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId?: string;
}


export class ActionsCreateOrUpdateRepoSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCreateOrUpdateRepoSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateOrUpdateRepoSecretRequestBody;
}


export class ActionsCreateOrUpdateRepoSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
