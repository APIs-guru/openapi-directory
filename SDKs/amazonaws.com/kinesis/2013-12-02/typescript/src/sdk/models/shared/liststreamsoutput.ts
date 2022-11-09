import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListStreamsOutput
/** 
 * Represents the output for <code>ListStreams</code>.
**/
export class ListStreamsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HasMoreStreams" })
  hasMoreStreams: boolean;

  @Metadata({ data: "json, name=StreamNames" })
  streamNames: string[];
}
