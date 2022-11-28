import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";



// ListStreamsOutput
/** 
 * Represents the output of a <code>ListStreams</code> operation.
**/
export class ListStreamsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedStreamArn" })
  lastEvaluatedStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Streams", elemType: Stream })
  streams?: Stream[];
}
