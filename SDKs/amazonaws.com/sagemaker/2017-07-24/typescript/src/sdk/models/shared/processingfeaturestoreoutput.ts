import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessingFeatureStoreOutput
/** 
 * Configuration for processing job outputs in Amazon SageMaker Feature Store.
**/
export class ProcessingFeatureStoreOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;
}
