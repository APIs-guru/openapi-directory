import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IncidentRecord } from "./incidentrecord";


export class GetIncidentRecordOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=incidentRecord" })
  incidentRecord: IncidentRecord;
}
