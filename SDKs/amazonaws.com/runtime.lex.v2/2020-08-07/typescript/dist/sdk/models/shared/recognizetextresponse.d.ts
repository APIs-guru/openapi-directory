import { SpeakeasyBase } from "../../../internal/utils";
import { Interpretation } from "./interpretation";
import { Message } from "./message";
import { SessionState } from "./sessionstate";
export declare class RecognizeTextResponse extends SpeakeasyBase {
    interpretations?: Interpretation[];
    messages?: Message[];
    requestAttributes?: Map<string, string>;
    sessionId?: string;
    sessionState?: SessionState;
}
