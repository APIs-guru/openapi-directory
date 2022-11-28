import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemIdentity } from "./opsitemidentity";



// OpsItemEventSummary
/** 
 * Summary information about an OpsItem event or that associated an OpsItem with a related item.
**/
export class OpsItemEventSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: OpsItemIdentity;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=DetailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;
}
