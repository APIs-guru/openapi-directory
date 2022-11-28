import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RejectedLogEventsInfo } from "./rejectedlogeventsinfo";



export class PutLogEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextSequenceToken" })
  nextSequenceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rejectedLogEventsInfo" })
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
}
