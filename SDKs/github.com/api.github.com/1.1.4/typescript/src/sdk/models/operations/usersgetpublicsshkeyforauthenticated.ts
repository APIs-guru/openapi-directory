import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetPublicSshKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: number;
}


export class UsersGetPublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersGetPublicSshKeyForAuthenticatedPathParams;
}


export class UsersGetPublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  key?: shared.Key;
}
