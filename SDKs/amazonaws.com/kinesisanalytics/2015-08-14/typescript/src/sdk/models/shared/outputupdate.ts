import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputUpdate } from "./kinesisfirehoseoutputupdate";
import { KinesisStreamsOutputUpdate } from "./kinesisstreamsoutputupdate";
import { LambdaOutputUpdate } from "./lambdaoutputupdate";



// OutputUpdate
/** 
 *  Describes updates to the output configuration identified by the <code>OutputId</code>. 
**/
export class OutputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationSchemaUpdate" })
  destinationSchemaUpdate?: DestinationSchema;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseOutputUpdate" })
  kinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamsOutputUpdate" })
  kinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  @SpeakeasyMetadata({ data: "json, name=LambdaOutputUpdate" })
  lambdaOutputUpdate?: LambdaOutputUpdate;

  @SpeakeasyMetadata({ data: "json, name=NameUpdate" })
  nameUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputId" })
  outputId: string;
}
