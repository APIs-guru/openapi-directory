import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistoryExportEntity
/** 
 * Show History Export
**/
export class HistoryExportEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=history_version" })
  historyVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=query_action" })
  queryAction?: string;

  @SpeakeasyMetadata({ data: "json, name=query_destination" })
  queryDestination?: string;

  @SpeakeasyMetadata({ data: "json, name=query_failure_type" })
  queryFailureType?: string;

  @SpeakeasyMetadata({ data: "json, name=query_file_id" })
  queryFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=query_folder" })
  queryFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=query_interface" })
  queryInterface?: string;

  @SpeakeasyMetadata({ data: "json, name=query_ip" })
  queryIp?: string;

  @SpeakeasyMetadata({ data: "json, name=query_parent_id" })
  queryParentId?: string;

  @SpeakeasyMetadata({ data: "json, name=query_path" })
  queryPath?: string;

  @SpeakeasyMetadata({ data: "json, name=query_src" })
  querySrc?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_id" })
  queryTargetId?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_name" })
  queryTargetName?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_permission" })
  queryTargetPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_permission_set" })
  queryTargetPermissionSet?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_platform" })
  queryTargetPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_user_id" })
  queryTargetUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=query_target_username" })
  queryTargetUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=query_user_id" })
  queryUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=query_username" })
  queryUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=results_url" })
  resultsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=start_at" })
  startAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
