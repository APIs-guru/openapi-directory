import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetRecordIdentifier
/** 
 * The identifier that identifies the batch of Records you are retrieving in a batch.
**/
export class BatchGetRecordIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureNames" })
  featureNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=RecordIdentifiersValueAsString" })
  recordIdentifiersValueAsString: string[];
}
