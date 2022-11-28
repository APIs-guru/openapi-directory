import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { BotVersionLocaleDetails } from "./botversionlocaledetails";
export declare class CreateBotVersionResponse extends SpeakeasyBase {
    botId?: string;
    botStatus?: BotStatusEnum;
    botVersion?: string;
    botVersionLocaleSpecification?: Map<string, BotVersionLocaleDetails>;
    creationDateTime?: Date;
    description?: string;
}
