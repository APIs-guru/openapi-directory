import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsCreateOrUpdateOrgSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}

export enum ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}


export class ActionsCreateOrUpdateOrgSecretRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encrypted_value" })
  encryptedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
}


export class ActionsCreateOrUpdateOrgSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCreateOrUpdateOrgSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateOrUpdateOrgSecretRequestBody;
}


export class ActionsCreateOrUpdateOrgSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
