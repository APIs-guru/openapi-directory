import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stream } from "./stream";


// ListStreamsOutput
/** 
 * Represents the output of a <code>ListStreams</code> operation.
**/
export class ListStreamsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastEvaluatedStreamArn" })
  lastEvaluatedStreamArn?: string;

  @Metadata({ data: "json, name=Streams", elemType: shared.Stream })
  streams?: Stream[];
}
