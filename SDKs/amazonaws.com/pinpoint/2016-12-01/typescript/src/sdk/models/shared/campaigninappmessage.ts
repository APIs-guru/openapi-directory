import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";


// CampaignInAppMessage
/** 
 * In-app message configuration.
**/
export class CampaignInAppMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=Content", elemType: shared.InAppMessageContent })
  content?: InAppMessageContent[];

  @Metadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @Metadata({ data: "json, name=Layout" })
  layout?: LayoutEnum;
}
