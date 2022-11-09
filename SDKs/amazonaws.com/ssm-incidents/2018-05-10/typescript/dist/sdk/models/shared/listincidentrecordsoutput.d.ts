import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IncidentRecordSummary } from "./incidentrecordsummary";
export declare class ListIncidentRecordsOutput extends SpeakeasyBase {
    incidentRecordSummaries: IncidentRecordSummary[];
    nextToken?: string;
}
