import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataConfig } from "./s3dataconfig";


// DatasetExportJobOutput
/** 
 * The output configuration parameters of a dataset export job.
**/
export class DatasetExportJobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3DataDestination" })
  s3DataDestination: S3DataConfig;
}
