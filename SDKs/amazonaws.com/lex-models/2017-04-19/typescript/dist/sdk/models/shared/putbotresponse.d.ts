import { SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { Intent } from "./intent";
import { LocaleEnum } from "./localeenum";
import { StatusEnum } from "./statusenum";
import { Tag } from "./tag";
export declare class PutBotResponse extends SpeakeasyBase {
    abortStatement?: Statement;
    checksum?: string;
    childDirected?: boolean;
    clarificationPrompt?: Prompt;
    createVersion?: boolean;
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
    tags?: Tag[];
    version?: string;
    voiceId?: string;
}
