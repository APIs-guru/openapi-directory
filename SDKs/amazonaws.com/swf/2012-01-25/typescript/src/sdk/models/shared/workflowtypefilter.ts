import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowTypeFilter
/** 
 * Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
**/
export class WorkflowTypeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
