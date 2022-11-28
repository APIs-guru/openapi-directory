import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



// UsersDeleteEmailForAuthenticatedRequestBody1
/** 
 * Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
**/
export class UsersDeleteEmailForAuthenticatedRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails: string[];
}


export class UsersDeleteEmailForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UsersDeleteEmailForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
