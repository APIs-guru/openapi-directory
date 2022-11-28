import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsInputUpdate
/** 
 * When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
**/
export class KinesisStreamsInputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARNUpdate" })
  roleArnUpdate?: string;
}
