import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutomationExecution } from "./automationexecution";
import { ChatChannel } from "./chatchannel";
import { IncidentRecordSource } from "./incidentrecordsource";
import { NotificationTargetItem } from "./notificationtargetitem";
import { IncidentRecordStatusEnum } from "./incidentrecordstatusenum";
/**
 * The record of the incident that's created when an incident occurs.
**/
export declare class IncidentRecord extends SpeakeasyBase {
    arn: string;
    automationExecutions?: AutomationExecution[];
    chatChannel?: ChatChannel;
    creationTime: Date;
    dedupeString: string;
    impact: number;
    incidentRecordSource: IncidentRecordSource;
    lastModifiedBy: string;
    lastModifiedTime: Date;
    notificationTargets?: NotificationTargetItem[];
    resolvedTime?: Date;
    status: IncidentRecordStatusEnum;
    summary?: string;
    title: string;
}
