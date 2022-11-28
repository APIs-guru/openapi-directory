import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsOutput
/** 
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). 
**/
export class KinesisStreamsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
