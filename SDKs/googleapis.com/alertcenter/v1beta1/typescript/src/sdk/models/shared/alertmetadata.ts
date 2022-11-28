import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlertMetadata
/** 
 * An alert metadata.
**/
export class AlertMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId?: string;

  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
