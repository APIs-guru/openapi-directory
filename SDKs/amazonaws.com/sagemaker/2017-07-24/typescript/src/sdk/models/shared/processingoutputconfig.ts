import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingOutput } from "./processingoutput";



// ProcessingOutputConfig
/** 
 * Configuration for uploading output from the processing container.
**/
export class ProcessingOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Outputs", elemType: ProcessingOutput })
  outputs: ProcessingOutput[];
}
