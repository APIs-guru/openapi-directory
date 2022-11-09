import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdAs2KeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class PostUsersUserIdAs2KeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=as2_partnership_name" })
  as2PartnershipName: string;

  @Metadata({ data: "multipart_form, name=public_key" })
  publicKey: string;
}


export class PostUsersUserIdAs2KeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdAs2KeysPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostUsersUserIdAs2KeysRequestBody;
}


export class PostUsersUserIdAs2KeysResponse extends SpeakeasyBase {
  @Metadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
