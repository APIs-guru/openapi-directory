import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Stream
/** 
 * Represents all of the data describing a particular stream.
**/
export class Stream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamLabel" })
  streamLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
