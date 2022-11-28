import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersGetGpgKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gpg_key_id" })
  gpgKeyId: number;
}


export class UsersGetGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersGetGpgKeyForAuthenticatedPathParams;
}


export class UsersGetGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gpgKey?: shared.GpgKey;
}
