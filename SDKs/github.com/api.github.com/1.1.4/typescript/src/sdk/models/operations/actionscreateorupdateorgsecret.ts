import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsCreateOrUpdateOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}

export enum ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum {
    All = "all"
,    Private = "private"
,    Selected = "selected"
}


export class ActionsCreateOrUpdateOrgSecretRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=encrypted_value" })
  encryptedValue?: string;

  @Metadata({ data: "json, name=key_id" })
  keyId?: string;

  @Metadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds?: string[];

  @Metadata({ data: "json, name=visibility" })
  visibility?: ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
}


export class ActionsCreateOrUpdateOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateOrUpdateOrgSecretPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateOrUpdateOrgSecretRequestBody;
}


export class ActionsCreateOrUpdateOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
