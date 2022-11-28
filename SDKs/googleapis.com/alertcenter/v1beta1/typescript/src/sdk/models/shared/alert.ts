import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertMetadata } from "./alertmetadata";



// Alert
/** 
 * An alert affecting a customer.
**/
export class Alert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: AlertMetadata;

  @SpeakeasyMetadata({ data: "json, name=securityInvestigationToolLink" })
  securityInvestigationToolLink?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
