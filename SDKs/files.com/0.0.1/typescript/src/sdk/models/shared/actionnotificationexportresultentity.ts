import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionNotificationExportResultEntity
/** 
 * List Action Notification Export Results
**/
export class ActionNotificationExportResultEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=folder" })
  folder?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=request_headers" })
  requestHeaders?: string;

  @SpeakeasyMetadata({ data: "json, name=request_method" })
  requestMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
