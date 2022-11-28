import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";



// InAppMessage
/** 
 * Provides all fields required for building an in-app message.
**/
export class InAppMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content", elemType: InAppMessageContent })
  content?: InAppMessageContent[];

  @SpeakeasyMetadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Layout" })
  layout?: LayoutEnum;
}
