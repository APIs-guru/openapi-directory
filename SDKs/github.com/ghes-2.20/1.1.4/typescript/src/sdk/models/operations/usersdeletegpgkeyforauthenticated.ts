import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersDeleteGpgKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gpg_key_id" })
  gpgKeyId: number;
}


export class UsersDeleteGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersDeleteGpgKeyForAuthenticatedPathParams;
}


export class UsersDeleteGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
