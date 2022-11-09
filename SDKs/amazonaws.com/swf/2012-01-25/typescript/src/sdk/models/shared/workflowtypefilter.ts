import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowTypeFilter
/** 
 * Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
**/
export class WorkflowTypeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
