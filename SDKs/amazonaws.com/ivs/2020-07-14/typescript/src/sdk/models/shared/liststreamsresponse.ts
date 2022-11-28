import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamSummary } from "./streamsummary";



export class ListStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=streams", elemType: StreamSummary })
  streams: StreamSummary[];
}
