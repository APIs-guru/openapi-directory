import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingFeatureStoreOutput } from "./processingfeaturestoreoutput";
import { ProcessingS3Output } from "./processings3output";


// ProcessingOutput
/** 
 * Describes the results of a processing job. The processing output must specify exactly one of either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.
**/
export class ProcessingOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppManaged" })
  appManaged?: boolean;

  @Metadata({ data: "json, name=FeatureStoreOutput" })
  featureStoreOutput?: ProcessingFeatureStoreOutput;

  @Metadata({ data: "json, name=OutputName" })
  outputName: string;

  @Metadata({ data: "json, name=S3Output" })
  s3Output?: ProcessingS3Output;
}
