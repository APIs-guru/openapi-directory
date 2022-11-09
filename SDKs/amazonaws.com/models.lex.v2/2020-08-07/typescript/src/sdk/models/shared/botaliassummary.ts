import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";


// BotAliasSummary
/** 
 * Summary information about bot aliases returned from the <a>ListBotAliases</a> operation.
**/
export class BotAliasSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @Metadata({ data: "json, name=botAliasName" })
  botAliasName?: string;

  @Metadata({ data: "json, name=botAliasStatus" })
  botAliasStatus?: BotAliasStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;
}
