import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UiTemplate
/** 
 * The Liquid template for the worker user interface.
**/
export class UiTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content: string;
}
