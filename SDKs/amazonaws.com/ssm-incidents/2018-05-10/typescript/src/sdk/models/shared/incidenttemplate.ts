import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationTargetItem } from "./notificationtargetitem";



// IncidentTemplate
/** 
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
export class IncidentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dedupeString" })
  dedupeString?: string;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact: number;

  @SpeakeasyMetadata({ data: "json, name=notificationTargets", elemType: NotificationTargetItem })
  notificationTargets?: NotificationTargetItem[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
