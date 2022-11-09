import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersDeletePublicSshKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: number;
}


export class UsersDeletePublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersDeletePublicSshKeyForAuthenticatedPathParams;
}


export class UsersDeletePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
