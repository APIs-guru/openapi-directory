import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RenderingError
/** 
 * A description of an error that occurred while rendering the template.
**/
export class RenderingError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code: string;

  @Metadata({ data: "json, name=Message" })
  message: string;
}
