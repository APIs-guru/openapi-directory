import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAs2KeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=as2_partnership_name" })
  as2PartnershipName: string;

  @Metadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostAs2KeysRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostAs2KeysRequestBody;
}


export class PostAs2KeysResponse extends SpeakeasyBase {
  @Metadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
