import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TensorBoardOutputConfig
/** 
 * Configuration of storage locations for the Debugger TensorBoard output data.
**/
export class TensorBoardOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
