import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTimelineEventOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}
