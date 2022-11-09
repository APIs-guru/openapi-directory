import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";


// InAppMessage
/** 
 * Provides all fields required for building an in-app message.
**/
export class InAppMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content", elemType: shared.InAppMessageContent })
  content?: InAppMessageContent[];

  @Metadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @Metadata({ data: "json, name=Layout" })
  layout?: LayoutEnum;
}
