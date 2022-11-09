import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TensorBoardOutputConfig
/** 
 * Configuration of storage locations for the Debugger TensorBoard output data.
**/
export class TensorBoardOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
