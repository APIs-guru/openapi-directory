import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a single utterance that was made to your bot.
**/
export declare class UtteranceData extends SpeakeasyBase {
    count?: number;
    distinctUsers?: number;
    firstUtteredDate?: Date;
    lastUtteredDate?: Date;
    utteranceString?: string;
}
