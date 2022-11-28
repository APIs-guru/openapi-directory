import { SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";
/**
 * In-app message configuration.
**/
export declare class CampaignInAppMessage extends SpeakeasyBase {
    body?: string;
    content?: InAppMessageContent[];
    customConfig?: Map<string, string>;
    layout?: LayoutEnum;
}
