import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionListItem } from "./executionlistitem";
export declare class ListExecutionsOutput extends SpeakeasyBase {
    executions: ExecutionListItem[];
    nextToken?: string;
}
