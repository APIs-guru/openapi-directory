import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HtmlContent
/** 
 * HTML content for a creative.
**/
export class HtmlContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
