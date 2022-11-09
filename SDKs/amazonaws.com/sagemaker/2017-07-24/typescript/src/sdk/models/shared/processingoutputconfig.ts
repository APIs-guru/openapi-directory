import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProcessingOutput } from "./processingoutput";


// ProcessingOutputConfig
/** 
 * Configuration for uploading output from the processing container.
**/
export class ProcessingOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Outputs", elemType: shared.ProcessingOutput })
  outputs: ProcessingOutput[];
}
