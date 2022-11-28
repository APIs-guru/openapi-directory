import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RenderableTask
/** 
 * Contains input values for a task.
**/
export class RenderableTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input: string;
}
