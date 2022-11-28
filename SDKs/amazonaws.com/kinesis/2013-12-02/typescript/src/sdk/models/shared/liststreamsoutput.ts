import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListStreamsOutput
/** 
 * Represents the output for <code>ListStreams</code>.
**/
export class ListStreamsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HasMoreStreams" })
  hasMoreStreams: boolean;

  @SpeakeasyMetadata({ data: "json, name=StreamNames" })
  streamNames: string[];
}
