import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionNotificationExportResultEntity
/** 
 * List Action Notification Export Results
**/
export class ActionNotificationExportResultEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=folder" })
  folder?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=request_headers" })
  requestHeaders?: string;

  @Metadata({ data: "json, name=request_method" })
  requestMethod?: string;

  @Metadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
