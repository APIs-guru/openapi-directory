import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RenderableTask
/** 
 * Contains input values for a task.
**/
export class RenderableTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input: string;
}
