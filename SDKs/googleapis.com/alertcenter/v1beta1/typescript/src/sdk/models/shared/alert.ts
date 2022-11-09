import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlertMetadata } from "./alertmetadata";


// Alert
/** 
 * An alert affecting a customer.
**/
export class Alert extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertId" })
  alertId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: AlertMetadata;

  @Metadata({ data: "json, name=securityInvestigationToolLink" })
  securityInvestigationToolLink?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
