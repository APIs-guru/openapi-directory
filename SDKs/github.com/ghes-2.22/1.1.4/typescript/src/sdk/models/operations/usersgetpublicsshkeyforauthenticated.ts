import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersGetPublicSshKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: number;
}


export class UsersGetPublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersGetPublicSshKeyForAuthenticatedPathParams;
}


export class UsersGetPublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  key?: shared.Key;
}
