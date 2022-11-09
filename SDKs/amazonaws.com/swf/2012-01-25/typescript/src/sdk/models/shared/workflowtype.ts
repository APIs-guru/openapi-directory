import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowType
/** 
 * Represents a workflow type.
**/
export class WorkflowType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
