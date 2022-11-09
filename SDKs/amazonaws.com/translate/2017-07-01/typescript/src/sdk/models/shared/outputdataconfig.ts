import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputDataConfig
/** 
 * The output configuration properties for a batch translation job.
**/
export class OutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
