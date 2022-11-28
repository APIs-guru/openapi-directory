import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class PutUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersSelectedUserSshKeysKeyIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @SpeakeasyMetadata()
  security: PutUsersSelectedUserSshKeysKeyIdSecurity;
}


export class PutUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sshAccountKey?: Map<string, any>;
}
