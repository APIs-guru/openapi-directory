import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowType
/** 
 * Represents a workflow type.
**/
export class WorkflowType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
