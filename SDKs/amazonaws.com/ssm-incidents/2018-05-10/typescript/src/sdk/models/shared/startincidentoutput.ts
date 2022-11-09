import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartIncidentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}
