import { SpeakeasyBase } from "../../../internal/utils";
import { OperationSummary } from "./operationsummary";
/**
 * The ListOperations response includes the following elements.
**/
export declare class ListOperationsResponse extends SpeakeasyBase {
    nextPageMarker?: string;
    operations: OperationSummary[];
}
