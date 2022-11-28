import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserIdPublicKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class PostUsersUserIdPublicKeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title: string;
}


export class PostUsersUserIdPublicKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserIdPublicKeysPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostUsersUserIdPublicKeysRequestBody;
}


export class PostUsersUserIdPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
