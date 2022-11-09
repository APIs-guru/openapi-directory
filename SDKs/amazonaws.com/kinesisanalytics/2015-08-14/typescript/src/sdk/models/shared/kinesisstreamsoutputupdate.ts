import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsOutputUpdate
/** 
 *  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. 
**/
export class KinesisStreamsOutputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate?: string;

  @Metadata({ data: "json, name=RoleARNUpdate" })
  roleArnUpdate?: string;
}
