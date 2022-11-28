import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTypeConfiguration } from "./workflowtypeconfiguration";
import { WorkflowTypeInfo } from "./workflowtypeinfo";
/**
 * Contains details about a workflow type.
**/
export declare class WorkflowTypeDetail extends SpeakeasyBase {
    configuration: WorkflowTypeConfiguration;
    typeInfo: WorkflowTypeInfo;
}
