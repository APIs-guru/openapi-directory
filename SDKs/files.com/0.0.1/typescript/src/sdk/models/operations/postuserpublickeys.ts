import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUserPublicKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @Metadata({ data: "multipart_form, name=title" })
  title: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostUserPublicKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUserPublicKeysRequestBody;
}


export class PostUserPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @Metadata()
  statusCode: number;
}
