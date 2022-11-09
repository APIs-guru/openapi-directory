import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTimelineEventOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}
