import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetDefinition } from "./datasetdefinition";
import { ProcessingS3Input } from "./processings3input";
/**
 * The inputs for a processing job. The processing input must specify exactly one of either <code>S3Input</code> or <code>DatasetDefinition</code> types.
**/
export declare class ProcessingInput extends SpeakeasyBase {
    appManaged?: boolean;
    datasetDefinition?: DatasetDefinition;
    inputName: string;
    s3Input?: ProcessingS3Input;
}
