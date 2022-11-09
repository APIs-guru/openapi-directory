import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionNotificationExportEntity
/** 
 * Show Action Notification Export
**/
export class ActionNotificationExportEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_at" })
  endAt?: Date;

  @Metadata({ data: "json, name=export_version" })
  exportVersion?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=query_folder" })
  queryFolder?: string;

  @Metadata({ data: "json, name=query_message" })
  queryMessage?: string;

  @Metadata({ data: "json, name=query_path" })
  queryPath?: string;

  @Metadata({ data: "json, name=query_request_method" })
  queryRequestMethod?: string;

  @Metadata({ data: "json, name=query_request_url" })
  queryRequestUrl?: string;

  @Metadata({ data: "json, name=query_status" })
  queryStatus?: string;

  @Metadata({ data: "json, name=query_success" })
  querySuccess?: boolean;

  @Metadata({ data: "json, name=results_url" })
  resultsUrl?: string;

  @Metadata({ data: "json, name=start_at" })
  startAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
