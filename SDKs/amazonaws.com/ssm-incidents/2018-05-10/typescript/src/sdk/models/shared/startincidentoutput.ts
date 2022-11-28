import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartIncidentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}
