import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTypeInfo } from "./workflowtypeinfo";



// WorkflowTypeInfos
/** 
 * Contains a paginated list of information structures about workflow types.
**/
export class WorkflowTypeInfos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=typeInfos", elemType: WorkflowTypeInfo })
  typeInfos: WorkflowTypeInfo[];
}
