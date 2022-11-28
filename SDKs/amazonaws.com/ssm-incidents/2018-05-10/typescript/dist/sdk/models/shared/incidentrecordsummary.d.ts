import { SpeakeasyBase } from "../../../internal/utils";
import { IncidentRecordSource } from "./incidentrecordsource";
import { IncidentRecordStatusEnum } from "./incidentrecordstatusenum";
/**
 * Details describing an incident record.
**/
export declare class IncidentRecordSummary extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    impact: number;
    incidentRecordSource: IncidentRecordSource;
    resolvedTime?: Date;
    status: IncidentRecordStatusEnum;
    title: string;
}
