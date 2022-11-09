import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BotVersionLocaleDetails
/** 
 * The version of a bot used for a bot locale.
**/
export class BotVersionLocaleDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceBotVersion" })
  sourceBotVersion: string;
}
