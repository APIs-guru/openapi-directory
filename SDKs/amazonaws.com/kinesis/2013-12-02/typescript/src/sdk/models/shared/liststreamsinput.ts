import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListStreamsInput
/** 
 * Represents the input for <code>ListStreams</code>.
**/
export class ListStreamsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartStreamName" })
  exclusiveStartStreamName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
