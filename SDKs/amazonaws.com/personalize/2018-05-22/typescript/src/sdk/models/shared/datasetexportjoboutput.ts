import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3DataConfig } from "./s3dataconfig";



// DatasetExportJobOutput
/** 
 * The output configuration parameters of a dataset export job.
**/
export class DatasetExportJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3DataDestination" })
  s3DataDestination: S3DataConfig;
}
