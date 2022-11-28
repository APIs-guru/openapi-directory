import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";



// CampaignInAppMessage
/** 
 * In-app message configuration.
**/
export class CampaignInAppMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=Content", elemType: InAppMessageContent })
  content?: InAppMessageContent[];

  @SpeakeasyMetadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Layout" })
  layout?: LayoutEnum;
}
