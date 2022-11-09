import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeHookSpecification } from "./codehookspecification";


// BotAliasLocaleSettings
/** 
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
**/
export class BotAliasLocaleSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=codeHookSpecification" })
  codeHookSpecification?: CodeHookSpecification;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
