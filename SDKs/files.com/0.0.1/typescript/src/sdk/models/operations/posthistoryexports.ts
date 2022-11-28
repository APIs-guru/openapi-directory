import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostHistoryExportsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_action" })
  queryAction?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_destination" })
  queryDestination?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_failure_type" })
  queryFailureType?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_file_id" })
  queryFileId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_folder" })
  queryFolder?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_interface" })
  queryInterface?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_ip" })
  queryIp?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_parent_id" })
  queryParentId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_path" })
  queryPath?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_src" })
  querySrc?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_id" })
  queryTargetId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_name" })
  queryTargetName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_permission" })
  queryTargetPermission?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_permission_set" })
  queryTargetPermissionSet?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_platform" })
  queryTargetPlatform?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_user_id" })
  queryTargetUserId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_target_username" })
  queryTargetUsername?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_user_id" })
  queryUserId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=query_username" })
  queryUsername?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=start_at" })
  startAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostHistoryExportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostHistoryExportsRequestBody;
}


export class PostHistoryExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  historyExportEntity?: shared.HistoryExportEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
