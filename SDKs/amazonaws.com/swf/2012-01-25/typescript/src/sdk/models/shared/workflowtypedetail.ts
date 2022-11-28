import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTypeConfiguration } from "./workflowtypeconfiguration";
import { WorkflowTypeInfo } from "./workflowtypeinfo";



// WorkflowTypeDetail
/** 
 * Contains details about a workflow type.
**/
export class WorkflowTypeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: WorkflowTypeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=typeInfo" })
  typeInfo: WorkflowTypeInfo;
}
