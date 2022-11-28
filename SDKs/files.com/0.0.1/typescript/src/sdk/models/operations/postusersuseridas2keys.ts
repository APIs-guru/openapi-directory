import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserIdAs2KeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class PostUsersUserIdAs2KeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=as2_partnership_name" })
  as2PartnershipName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=public_key" })
  publicKey: string;
}


export class PostUsersUserIdAs2KeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserIdAs2KeysPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostUsersUserIdAs2KeysRequestBody;
}


export class PostUsersUserIdAs2KeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
