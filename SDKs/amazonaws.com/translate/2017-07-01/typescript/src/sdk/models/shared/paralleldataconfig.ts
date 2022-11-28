import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataFormatEnum } from "./paralleldataformatenum";



// ParallelDataConfig
/** 
 * Specifies the format and S3 location of the parallel data input file.
**/
export class ParallelDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: ParallelDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
