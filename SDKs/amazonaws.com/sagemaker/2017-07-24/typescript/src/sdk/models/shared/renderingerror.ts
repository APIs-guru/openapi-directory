import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RenderingError
/** 
 * A description of an error that occurred while rendering the template.
**/
export class RenderingError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;
}
