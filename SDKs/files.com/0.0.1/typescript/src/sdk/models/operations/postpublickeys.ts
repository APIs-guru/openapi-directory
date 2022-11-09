import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPublicKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @Metadata({ data: "multipart_form, name=title" })
  title: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostPublicKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostPublicKeysRequestBody;
}


export class PostPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @Metadata()
  statusCode: number;
}
