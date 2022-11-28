import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingFeatureStoreOutput } from "./processingfeaturestoreoutput";
import { ProcessingS3Output } from "./processings3output";
/**
 * Describes the results of a processing job. The processing output must specify exactly one of either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.
**/
export declare class ProcessingOutput extends SpeakeasyBase {
    appManaged?: boolean;
    featureStoreOutput?: ProcessingFeatureStoreOutput;
    outputName: string;
    s3Output?: ProcessingS3Output;
}
