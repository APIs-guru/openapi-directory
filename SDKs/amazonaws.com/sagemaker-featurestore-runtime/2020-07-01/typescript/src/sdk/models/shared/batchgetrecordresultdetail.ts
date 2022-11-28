import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureValue } from "./featurevalue";



// BatchGetRecordResultDetail
/** 
 * The output of Records that have been retrieved in a batch.
**/
export class BatchGetRecordResultDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Record", elemType: FeatureValue })
  record: FeatureValue[];

  @SpeakeasyMetadata({ data: "json, name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}
