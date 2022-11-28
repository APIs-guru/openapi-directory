import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckpointConfig
/** 
 * Contains information about the output location for managed spot training checkpoint data. 
**/
export class CheckpointConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
