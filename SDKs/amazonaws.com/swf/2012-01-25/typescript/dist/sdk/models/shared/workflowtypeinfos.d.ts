import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTypeInfo } from "./workflowtypeinfo";
/**
 * Contains a paginated list of information structures about workflow types.
**/
export declare class WorkflowTypeInfos extends SpeakeasyBase {
    nextPageToken?: string;
    typeInfos: WorkflowTypeInfo[];
}
