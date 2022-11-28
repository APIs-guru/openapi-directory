import { SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { Intent } from "./intent";
import { LocaleEnum } from "./localeenum";
import { StatusEnum } from "./statusenum";
export declare class GetBotResponse extends SpeakeasyBase {
    abortStatement?: Statement;
    checksum?: string;
    childDirected?: boolean;
    clarificationPrompt?: Prompt;
    createdDate?: Date;
    description?: string;
    detectSentiment?: boolean;
    enableModelImprovements?: boolean;
    failureReason?: string;
    idleSessionTtlInSeconds?: number;
    intents?: Intent[];
    lastUpdatedDate?: Date;
    locale?: LocaleEnum;
    name?: string;
    nluIntentConfidenceThreshold?: number;
    status?: StatusEnum;
    version?: string;
    voiceId?: string;
}
