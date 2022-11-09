import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=automationExecutions", elemType: shared.AutomationExecution })
  automationExecutions?: AutomationExecution[];

  @Metadata({ data: "json, name=chatChannel" })
  chatChannel?: ChatChannel;

  @Metadata({ data: "json, name=creationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=dedupeString" })
  dedupeString: string;

  @Metadata({ data: "json, name=impact" })
  impact: number;

  @Metadata({ data: "json, name=incidentRecordSource" })
  incidentRecordSource: IncidentRecordSource;

  @Metadata({ data: "json, name=lastModifiedBy" })
  lastModifiedBy: string;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem })
  notificationTargets?: NotificationTargetItem[];

  @Metadata({ data: "json, name=resolvedTime" })
  resolvedTime?: Date;

  @Metadata({ data: "json, name=status" })
  status: IncidentRecordStatusEnum;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
