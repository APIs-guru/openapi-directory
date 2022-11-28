import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BotVersionLocaleDetails
/** 
 * The version of a bot used for a bot locale.
**/
export class BotVersionLocaleDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceBotVersion" })
  sourceBotVersion: string;
}
