import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdPublicKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class PostUsersUserIdPublicKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @Metadata({ data: "multipart_form, name=title" })
  title: string;
}


export class PostUsersUserIdPublicKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdPublicKeysPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostUsersUserIdPublicKeysRequestBody;
}


export class PostUsersUserIdPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @Metadata()
  statusCode: number;
}
