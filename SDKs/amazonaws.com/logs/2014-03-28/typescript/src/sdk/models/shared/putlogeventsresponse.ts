import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RejectedLogEventsInfo } from "./rejectedlogeventsinfo";


export class PutLogEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextSequenceToken" })
  nextSequenceToken?: string;

  @Metadata({ data: "json, name=rejectedLogEventsInfo" })
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
}
