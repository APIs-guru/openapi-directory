import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetGpgKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gpg_key_id" })
  gpgKeyId: number;
}


export class UsersGetGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersGetGpgKeyForAuthenticatedPathParams;
}


export class UsersGetGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gpgKey?: shared.GpgKey;
}
