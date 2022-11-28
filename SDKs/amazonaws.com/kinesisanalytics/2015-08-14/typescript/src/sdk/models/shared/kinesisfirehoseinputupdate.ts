import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseInputUpdate
/** 
 * When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
**/
export class KinesisFirehoseInputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARNUpdate" })
  roleArnUpdate?: string;
}
