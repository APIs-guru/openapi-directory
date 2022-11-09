import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamInfo } from "./streaminfo";


export class ListStreamsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StreamInfoList", elemType: shared.StreamInfo })
  streamInfoList?: StreamInfo[];
}
