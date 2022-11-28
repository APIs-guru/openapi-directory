import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAs2KeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=as2_partnership_name" })
  as2PartnershipName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=public_key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostAs2KeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostAs2KeysRequestBody;
}


export class PostAs2KeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
