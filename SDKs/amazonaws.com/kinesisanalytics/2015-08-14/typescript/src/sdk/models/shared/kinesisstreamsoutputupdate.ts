import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsOutputUpdate
/** 
 *  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. 
**/
export class KinesisStreamsOutputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARNUpdate" })
  roleArnUpdate?: string;
}
