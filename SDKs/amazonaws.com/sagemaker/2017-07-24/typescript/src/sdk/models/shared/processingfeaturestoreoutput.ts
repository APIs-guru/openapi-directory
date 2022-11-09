import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessingFeatureStoreOutput
/** 
 * Configuration for processing job outputs in Amazon SageMaker Feature Store.
**/
export class ProcessingFeatureStoreOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;
}
