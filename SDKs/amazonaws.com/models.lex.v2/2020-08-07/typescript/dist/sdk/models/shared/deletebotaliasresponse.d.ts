import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
export declare class DeleteBotAliasResponse extends SpeakeasyBase {
    botAliasId?: string;
    botAliasStatus?: BotAliasStatusEnum;
    botId?: string;
}
