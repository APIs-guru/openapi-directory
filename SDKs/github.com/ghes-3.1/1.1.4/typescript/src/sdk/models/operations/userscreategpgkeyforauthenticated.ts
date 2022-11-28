import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersCreateGpgKeyForAuthenticatedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=armored_public_key" })
  armoredPublicKey: string;
}


export class UsersCreateGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersCreateGpgKeyForAuthenticatedRequestBody;
}


export class UsersCreateGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gpgKey?: shared.GpgKey;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
