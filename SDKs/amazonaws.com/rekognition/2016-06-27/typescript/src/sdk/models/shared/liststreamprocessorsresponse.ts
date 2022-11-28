import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessor } from "./streamprocessor";



export class ListStreamProcessorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamProcessors", elemType: StreamProcessor })
  streamProcessors?: StreamProcessor[];
}
