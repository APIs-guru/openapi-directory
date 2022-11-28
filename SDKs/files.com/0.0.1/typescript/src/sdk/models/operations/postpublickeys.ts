import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPublicKeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostPublicKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostPublicKeysRequestBody;
}


export class PostPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
