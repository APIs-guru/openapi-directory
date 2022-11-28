import { SpeakeasyBase } from "../../../internal/utils";
import { OperationFilter } from "./operationfilter";
export declare class ListOperationsRequest extends SpeakeasyBase {
    filters?: OperationFilter[];
    maxResults?: number;
    nextToken?: string;
}
