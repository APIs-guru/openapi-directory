import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersDeletePublicSshKeyForAuthenticatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: number;
}


export class UsersDeletePublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersDeletePublicSshKeyForAuthenticatedPathParams;
}


export class UsersDeletePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
