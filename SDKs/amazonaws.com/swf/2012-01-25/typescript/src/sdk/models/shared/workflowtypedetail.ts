import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowTypeConfiguration } from "./workflowtypeconfiguration";
import { WorkflowTypeInfo } from "./workflowtypeinfo";


// WorkflowTypeDetail
/** 
 * Contains details about a workflow type.
**/
export class WorkflowTypeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration: WorkflowTypeConfiguration;

  @Metadata({ data: "json, name=typeInfo" })
  typeInfo: WorkflowTypeInfo;
}
