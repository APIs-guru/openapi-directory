import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IncidentRecord } from "./incidentrecord";



export class GetIncidentRecordOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incidentRecord" })
  incidentRecord: IncidentRecord;
}
