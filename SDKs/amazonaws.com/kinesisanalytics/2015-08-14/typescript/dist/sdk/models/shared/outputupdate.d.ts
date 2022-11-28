import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputUpdate } from "./kinesisfirehoseoutputupdate";
import { KinesisStreamsOutputUpdate } from "./kinesisstreamsoutputupdate";
import { LambdaOutputUpdate } from "./lambdaoutputupdate";
/**
 *  Describes updates to the output configuration identified by the <code>OutputId</code>.
**/
export declare class OutputUpdate extends SpeakeasyBase {
    destinationSchemaUpdate?: DestinationSchema;
    kinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
    kinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
    lambdaOutputUpdate?: LambdaOutputUpdate;
    nameUpdate?: string;
    outputId: string;
}
