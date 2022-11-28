import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingFeatureStoreOutput } from "./processingfeaturestoreoutput";
import { ProcessingS3Output } from "./processings3output";



// ProcessingOutput
/** 
 * Describes the results of a processing job. The processing output must specify exactly one of either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.
**/
export class ProcessingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppManaged" })
  appManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FeatureStoreOutput" })
  featureStoreOutput?: ProcessingFeatureStoreOutput;

  @SpeakeasyMetadata({ data: "json, name=OutputName" })
  outputName: string;

  @SpeakeasyMetadata({ data: "json, name=S3Output" })
  s3Output?: ProcessingS3Output;
}
