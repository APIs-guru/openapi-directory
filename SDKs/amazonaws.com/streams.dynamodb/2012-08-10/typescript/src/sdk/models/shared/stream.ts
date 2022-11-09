import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Stream
/** 
 * Represents all of the data describing a particular stream.
**/
export class Stream extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamArn" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamLabel" })
  streamLabel?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
