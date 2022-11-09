import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The identifier that identifies the batch of Records you are retrieving in a batch.
**/
export declare class BatchGetRecordIdentifier extends SpeakeasyBase {
    featureGroupName: string;
    featureNames?: string[];
    recordIdentifiersValueAsString: string[];
}
