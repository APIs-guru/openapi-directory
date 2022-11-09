import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckpointConfig
/** 
 * Contains information about the output location for managed spot training checkpoint data. 
**/
export class CheckpointConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
