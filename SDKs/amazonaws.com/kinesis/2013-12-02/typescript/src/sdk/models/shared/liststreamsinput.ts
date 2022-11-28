import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListStreamsInput
/** 
 * Represents the input for <code>ListStreams</code>.
**/
export class ListStreamsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartStreamName" })
  exclusiveStartStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
