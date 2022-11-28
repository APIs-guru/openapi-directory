import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination.
**/
export declare class KinesisStreamsOutputUpdate extends SpeakeasyBase {
    resourceArnUpdate?: string;
    roleArnUpdate?: string;
}
