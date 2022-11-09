import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetDefinition } from "./datasetdefinition";
import { ProcessingS3Input } from "./processings3input";


// ProcessingInput
/** 
 * The inputs for a processing job. The processing input must specify exactly one of either <code>S3Input</code> or <code>DatasetDefinition</code> types.
**/
export class ProcessingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppManaged" })
  appManaged?: boolean;

  @Metadata({ data: "json, name=DatasetDefinition" })
  datasetDefinition?: DatasetDefinition;

  @Metadata({ data: "json, name=InputName" })
  inputName: string;

  @Metadata({ data: "json, name=S3Input" })
  s3Input?: ProcessingS3Input;
}
