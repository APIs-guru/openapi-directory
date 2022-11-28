import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionNotificationExportEntity
/** 
 * Show Action Notification Export
**/
export class ActionNotificationExportEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=export_version" })
  exportVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=query_folder" })
  queryFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=query_message" })
  queryMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=query_path" })
  queryPath?: string;

  @SpeakeasyMetadata({ data: "json, name=query_request_method" })
  queryRequestMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=query_request_url" })
  queryRequestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=query_status" })
  queryStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=query_success" })
  querySuccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=results_url" })
  resultsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=start_at" })
  startAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
