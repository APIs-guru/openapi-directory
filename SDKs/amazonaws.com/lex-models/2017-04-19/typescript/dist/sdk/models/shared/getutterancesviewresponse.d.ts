import { SpeakeasyBase } from "../../../internal/utils";
import { UtteranceList } from "./utterancelist";
export declare class GetUtterancesViewResponse extends SpeakeasyBase {
    botName?: string;
    utterances?: UtteranceList[];
}
