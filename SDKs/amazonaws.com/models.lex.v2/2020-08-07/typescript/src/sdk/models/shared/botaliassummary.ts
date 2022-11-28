import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";



// BotAliasSummary
/** 
 * Summary information about bot aliases returned from the <a>ListBotAliases</a> operation.
**/
export class BotAliasSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=botAliasName" })
  botAliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=botAliasStatus" })
  botAliasStatus?: BotAliasStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;
}
