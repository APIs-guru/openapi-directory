import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostHistoryExportsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=end_at" })
  endAt?: Date;

  @Metadata({ data: "multipart_form, name=query_action" })
  queryAction?: string;

  @Metadata({ data: "multipart_form, name=query_destination" })
  queryDestination?: string;

  @Metadata({ data: "multipart_form, name=query_failure_type" })
  queryFailureType?: string;

  @Metadata({ data: "multipart_form, name=query_file_id" })
  queryFileId?: string;

  @Metadata({ data: "multipart_form, name=query_folder" })
  queryFolder?: string;

  @Metadata({ data: "multipart_form, name=query_interface" })
  queryInterface?: string;

  @Metadata({ data: "multipart_form, name=query_ip" })
  queryIp?: string;

  @Metadata({ data: "multipart_form, name=query_parent_id" })
  queryParentId?: string;

  @Metadata({ data: "multipart_form, name=query_path" })
  queryPath?: string;

  @Metadata({ data: "multipart_form, name=query_src" })
  querySrc?: string;

  @Metadata({ data: "multipart_form, name=query_target_id" })
  queryTargetId?: string;

  @Metadata({ data: "multipart_form, name=query_target_name" })
  queryTargetName?: string;

  @Metadata({ data: "multipart_form, name=query_target_permission" })
  queryTargetPermission?: string;

  @Metadata({ data: "multipart_form, name=query_target_permission_set" })
  queryTargetPermissionSet?: string;

  @Metadata({ data: "multipart_form, name=query_target_platform" })
  queryTargetPlatform?: string;

  @Metadata({ data: "multipart_form, name=query_target_user_id" })
  queryTargetUserId?: string;

  @Metadata({ data: "multipart_form, name=query_target_username" })
  queryTargetUsername?: string;

  @Metadata({ data: "multipart_form, name=query_user_id" })
  queryUserId?: string;

  @Metadata({ data: "multipart_form, name=query_username" })
  queryUsername?: string;

  @Metadata({ data: "multipart_form, name=start_at" })
  startAt?: Date;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostHistoryExportsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostHistoryExportsRequestBody;
}


export class PostHistoryExportsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  historyExportEntity?: shared.HistoryExportEntity;

  @Metadata()
  statusCode: number;
}
