import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetCustomDataIdentifierSummary } from "./batchgetcustomdataidentifiersummary";
export declare class BatchGetCustomDataIdentifiersResponse extends SpeakeasyBase {
    customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];
    notFoundIdentifierIds?: string[];
}
