import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecution } from "./automationexecution";
import { ChatChannel } from "./chatchannel";
import { IncidentRecordSource } from "./incidentrecordsource";
import { NotificationTargetItem } from "./notificationtargetitem";
import { IncidentRecordStatusEnum } from "./incidentrecordstatusenum";



// IncidentRecord
/** 
 * The record of the incident that's created when an incident occurs.
**/
export class IncidentRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=automationExecutions", elemType: AutomationExecution })
  automationExecutions?: AutomationExecution[];

  @SpeakeasyMetadata({ data: "json, name=chatChannel" })
  chatChannel?: ChatChannel;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=dedupeString" })
  dedupeString: string;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact: number;

  @SpeakeasyMetadata({ data: "json, name=incidentRecordSource" })
  incidentRecordSource: IncidentRecordSource;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedBy" })
  lastModifiedBy: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=notificationTargets", elemType: NotificationTargetItem })
  notificationTargets?: NotificationTargetItem[];

  @SpeakeasyMetadata({ data: "json, name=resolvedTime" })
  resolvedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: IncidentRecordStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
