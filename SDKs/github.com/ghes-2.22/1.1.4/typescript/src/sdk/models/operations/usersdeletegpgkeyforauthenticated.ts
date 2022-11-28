import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersDeleteGpgKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gpg_key_id" })
  gpgKeyId: number;
}


export class UsersDeleteGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersDeleteGpgKeyForAuthenticatedPathParams;
}


export class UsersDeleteGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
