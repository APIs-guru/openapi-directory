import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";
export declare class CreateBotResponse extends SpeakeasyBase {
    botId?: string;
    botName?: string;
    botStatus?: BotStatusEnum;
    botTags?: Map<string, string>;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    idleSessionTtlInSeconds?: number;
    roleArn?: string;
    testBotAliasTags?: Map<string, string>;
}
