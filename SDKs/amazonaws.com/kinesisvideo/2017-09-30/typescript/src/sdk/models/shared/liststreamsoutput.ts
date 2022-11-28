import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamInfo } from "./streaminfo";



export class ListStreamsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamInfoList", elemType: StreamInfo })
  streamInfoList?: StreamInfo[];
}
