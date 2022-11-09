import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItemIdentity } from "./opsitemidentity";


// OpsItemEventSummary
/** 
 * Summary information about an OpsItem event or that associated an OpsItem with a related item.
**/
export class OpsItemEventSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: OpsItemIdentity;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Detail" })
  detail?: string;

  @Metadata({ data: "json, name=DetailType" })
  detailType?: string;

  @Metadata({ data: "json, name=EventId" })
  eventId?: string;

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;
}
