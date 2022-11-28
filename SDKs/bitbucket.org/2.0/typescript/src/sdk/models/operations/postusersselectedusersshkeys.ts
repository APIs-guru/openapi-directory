import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersSelectedUserSshKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class PostUsersSelectedUserSshKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PostUsersSelectedUserSshKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersSelectedUserSshKeysPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @SpeakeasyMetadata()
  security: PostUsersSelectedUserSshKeysSecurity;
}


export class PostUsersSelectedUserSshKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sshAccountKey?: Map<string, any>;
}
