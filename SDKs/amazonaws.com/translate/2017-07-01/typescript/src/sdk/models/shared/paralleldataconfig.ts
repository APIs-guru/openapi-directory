import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParallelDataFormatEnum } from "./paralleldataformatenum";


// ParallelDataConfig
/** 
 * Specifies the format and S3 location of the parallel data input file.
**/
export class ParallelDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Format" })
  format: ParallelDataFormatEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
