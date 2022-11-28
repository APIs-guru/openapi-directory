import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UiTemplate
/** 
 * The Liquid template for the worker user interface.
**/
export class UiTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;
}
