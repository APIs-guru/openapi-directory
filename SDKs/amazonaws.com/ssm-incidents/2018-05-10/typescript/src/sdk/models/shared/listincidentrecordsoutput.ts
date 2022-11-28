import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IncidentRecordSummary } from "./incidentrecordsummary";



export class ListIncidentRecordsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incidentRecordSummaries", elemType: IncidentRecordSummary })
  incidentRecordSummaries: IncidentRecordSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
