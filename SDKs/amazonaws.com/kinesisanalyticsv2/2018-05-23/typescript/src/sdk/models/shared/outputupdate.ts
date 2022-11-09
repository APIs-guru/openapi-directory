import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputUpdate } from "./kinesisfirehoseoutputupdate";
import { KinesisStreamsOutputUpdate } from "./kinesisstreamsoutputupdate";
import { LambdaOutputUpdate } from "./lambdaoutputupdate";


// OutputUpdate
/** 
 *  For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>. 
**/
export class OutputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationSchemaUpdate" })
  destinationSchemaUpdate?: DestinationSchema;

  @Metadata({ data: "json, name=KinesisFirehoseOutputUpdate" })
  kinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  @Metadata({ data: "json, name=KinesisStreamsOutputUpdate" })
  kinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  @Metadata({ data: "json, name=LambdaOutputUpdate" })
  lambdaOutputUpdate?: LambdaOutputUpdate;

  @Metadata({ data: "json, name=NameUpdate" })
  nameUpdate?: string;

  @Metadata({ data: "json, name=OutputId" })
  outputId: string;
}
