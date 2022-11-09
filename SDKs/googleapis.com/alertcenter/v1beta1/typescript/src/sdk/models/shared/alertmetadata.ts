import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AlertMetadata
/** 
 * An alert metadata.
**/
export class AlertMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertId" })
  alertId?: string;

  @Metadata({ data: "json, name=assignee" })
  assignee?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
