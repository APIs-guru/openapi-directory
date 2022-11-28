import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";
export declare class UpdateBotResponse extends SpeakeasyBase {
    botId?: string;
    botName?: string;
    botStatus?: BotStatusEnum;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    idleSessionTtlInSeconds?: number;
    lastUpdatedDateTime?: Date;
    roleArn?: string;
}
