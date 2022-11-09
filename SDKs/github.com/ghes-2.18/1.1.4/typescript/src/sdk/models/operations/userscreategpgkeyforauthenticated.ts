import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersCreateGpgKeyForAuthenticatedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=armored_public_key" })
  armoredPublicKey: string;
}


export class UsersCreateGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersCreateGpgKeyForAuthenticatedRequestBody;
}


export class UsersCreateGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gpgKey?: shared.GpgKey;

  @Metadata()
  validationError?: shared.ValidationError;
}
