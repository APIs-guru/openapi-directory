import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureValue } from "./featurevalue";


// BatchGetRecordResultDetail
/** 
 * The output of Records that have been retrieved in a batch.
**/
export class BatchGetRecordResultDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=Record", elemType: shared.FeatureValue })
  record: FeatureValue[];

  @Metadata({ data: "json, name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}
