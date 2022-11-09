import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IncidentRecordSummary } from "./incidentrecordsummary";


export class ListIncidentRecordsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=incidentRecordSummaries", elemType: shared.IncidentRecordSummary })
  incidentRecordSummaries: IncidentRecordSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
