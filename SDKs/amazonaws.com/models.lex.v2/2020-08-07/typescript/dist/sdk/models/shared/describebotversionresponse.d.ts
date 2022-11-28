import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";
export declare class DescribeBotVersionResponse extends SpeakeasyBase {
    botId?: string;
    botName?: string;
    botStatus?: BotStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    failureReasons?: string[];
    idleSessionTtlInSeconds?: number;
    roleArn?: string;
}
