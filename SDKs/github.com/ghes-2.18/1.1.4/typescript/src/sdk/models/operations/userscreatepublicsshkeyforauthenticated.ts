import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersCreatePublicSshKeyForAuthenticatedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class UsersCreatePublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersCreatePublicSshKeyForAuthenticatedRequestBody;
}


export class UsersCreatePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  key?: shared.Key;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
