import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FeatureValue } from "./featurevalue";
/**
 * The output of Records that have been retrieved in a batch.
**/
export declare class BatchGetRecordResultDetail extends SpeakeasyBase {
    featureGroupName: string;
    record: FeatureValue[];
    recordIdentifierValueAsString: string;
}
