import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkflowTypeInfo } from "./workflowtypeinfo";


// WorkflowTypeInfos
/** 
 * Contains a paginated list of information structures about workflow types.
**/
export class WorkflowTypeInfos extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=typeInfos", elemType: shared.WorkflowTypeInfo })
  typeInfos: WorkflowTypeInfo[];
}
