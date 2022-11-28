import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;
}


export class DeleteUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class DeleteUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersSelectedUserHooksUidPathParams;

  @SpeakeasyMetadata()
  security: DeleteUsersSelectedUserHooksUidSecurity;
}


export class DeleteUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
