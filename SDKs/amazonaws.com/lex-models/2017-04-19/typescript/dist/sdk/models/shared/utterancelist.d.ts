import { SpeakeasyBase } from "../../../internal/utils";
import { UtteranceData } from "./utterancedata";
/**
 * Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
**/
export declare class UtteranceList extends SpeakeasyBase {
    botVersion?: string;
    utterances?: UtteranceData[];
}
