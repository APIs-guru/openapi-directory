import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostActionNotificationExportsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=end_at" })
  endAt?: Date;

  @Metadata({ data: "multipart_form, name=query_folder" })
  queryFolder?: string;

  @Metadata({ data: "multipart_form, name=query_message" })
  queryMessage?: string;

  @Metadata({ data: "multipart_form, name=query_path" })
  queryPath?: string;

  @Metadata({ data: "multipart_form, name=query_request_method" })
  queryRequestMethod?: string;

  @Metadata({ data: "multipart_form, name=query_request_url" })
  queryRequestUrl?: string;

  @Metadata({ data: "multipart_form, name=query_status" })
  queryStatus?: string;

  @Metadata({ data: "multipart_form, name=query_success" })
  querySuccess?: boolean;

  @Metadata({ data: "multipart_form, name=start_at" })
  startAt?: Date;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostActionNotificationExportsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostActionNotificationExportsRequestBody;
}


export class PostActionNotificationExportsResponse extends SpeakeasyBase {
  @Metadata()
  actionNotificationExportEntity?: shared.ActionNotificationExportEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
