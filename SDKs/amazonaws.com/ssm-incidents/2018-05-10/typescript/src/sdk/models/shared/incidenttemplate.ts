import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationTargetItem } from "./notificationtargetitem";


// IncidentTemplate
/** 
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
export class IncidentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=dedupeString" })
  dedupeString?: string;

  @Metadata({ data: "json, name=impact" })
  impact: number;

  @Metadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem })
  notificationTargets?: NotificationTargetItem[];

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
