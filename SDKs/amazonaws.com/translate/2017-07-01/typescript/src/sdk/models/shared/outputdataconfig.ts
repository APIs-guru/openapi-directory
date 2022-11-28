import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputDataConfig
/** 
 * The output configuration properties for a batch translation job.
**/
export class OutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
