import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersCreatePublicSshKeyForAuthenticatedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class UsersCreatePublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersCreatePublicSshKeyForAuthenticatedRequestBody;
}


export class UsersCreatePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  key?: shared.Key;

  @Metadata()
  validationError?: shared.ValidationError;
}
