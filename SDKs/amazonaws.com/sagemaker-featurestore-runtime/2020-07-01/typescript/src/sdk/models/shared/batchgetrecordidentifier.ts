import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetRecordIdentifier
/** 
 * The identifier that identifies the batch of Records you are retrieving in a batch.
**/
export class BatchGetRecordIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=FeatureNames" })
  featureNames?: string[];

  @Metadata({ data: "json, name=RecordIdentifiersValueAsString" })
  recordIdentifiersValueAsString: string[];
}
