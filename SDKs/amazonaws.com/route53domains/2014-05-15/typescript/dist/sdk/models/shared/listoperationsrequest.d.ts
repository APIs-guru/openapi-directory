import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ListOperations request includes the following elements.
**/
export declare class ListOperationsRequest extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
    submittedSince?: Date;
}
