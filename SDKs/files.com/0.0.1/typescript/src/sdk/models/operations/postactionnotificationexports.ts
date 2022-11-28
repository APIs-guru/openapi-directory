import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostActionNotificationExportsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_folder" })
  queryFolder?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_message" })
  queryMessage?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_path" })
  queryPath?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_request_method" })
  queryRequestMethod?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_request_url" })
  queryRequestUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_status" })
  queryStatus?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_success" })
  querySuccess?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=start_at" })
  startAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostActionNotificationExportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostActionNotificationExportsRequestBody;
}


export class PostActionNotificationExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionNotificationExportEntity?: shared.ActionNotificationExportEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
