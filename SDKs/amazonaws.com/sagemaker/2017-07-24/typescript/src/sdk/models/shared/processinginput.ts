import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetDefinition } from "./datasetdefinition";
import { ProcessingS3Input } from "./processings3input";



// ProcessingInput
/** 
 * The inputs for a processing job. The processing input must specify exactly one of either <code>S3Input</code> or <code>DatasetDefinition</code> types.
**/
export class ProcessingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppManaged" })
  appManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatasetDefinition" })
  datasetDefinition?: DatasetDefinition;

  @SpeakeasyMetadata({ data: "json, name=InputName" })
  inputName: string;

  @SpeakeasyMetadata({ data: "json, name=S3Input" })
  s3Input?: ProcessingS3Input;
}
