import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistoryExportEntity
/** 
 * Show History Export
**/
export class HistoryExportEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_at" })
  endAt?: Date;

  @Metadata({ data: "json, name=history_version" })
  historyVersion?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=query_action" })
  queryAction?: string;

  @Metadata({ data: "json, name=query_destination" })
  queryDestination?: string;

  @Metadata({ data: "json, name=query_failure_type" })
  queryFailureType?: string;

  @Metadata({ data: "json, name=query_file_id" })
  queryFileId?: string;

  @Metadata({ data: "json, name=query_folder" })
  queryFolder?: string;

  @Metadata({ data: "json, name=query_interface" })
  queryInterface?: string;

  @Metadata({ data: "json, name=query_ip" })
  queryIp?: string;

  @Metadata({ data: "json, name=query_parent_id" })
  queryParentId?: string;

  @Metadata({ data: "json, name=query_path" })
  queryPath?: string;

  @Metadata({ data: "json, name=query_src" })
  querySrc?: string;

  @Metadata({ data: "json, name=query_target_id" })
  queryTargetId?: string;

  @Metadata({ data: "json, name=query_target_name" })
  queryTargetName?: string;

  @Metadata({ data: "json, name=query_target_permission" })
  queryTargetPermission?: string;

  @Metadata({ data: "json, name=query_target_permission_set" })
  queryTargetPermissionSet?: string;

  @Metadata({ data: "json, name=query_target_platform" })
  queryTargetPlatform?: string;

  @Metadata({ data: "json, name=query_target_user_id" })
  queryTargetUserId?: string;

  @Metadata({ data: "json, name=query_target_username" })
  queryTargetUsername?: string;

  @Metadata({ data: "json, name=query_user_id" })
  queryUserId?: string;

  @Metadata({ data: "json, name=query_username" })
  queryUsername?: string;

  @Metadata({ data: "json, name=results_url" })
  resultsUrl?: string;

  @Metadata({ data: "json, name=start_at" })
  startAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
