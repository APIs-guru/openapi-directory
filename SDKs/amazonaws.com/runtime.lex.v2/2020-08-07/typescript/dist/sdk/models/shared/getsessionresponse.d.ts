import { SpeakeasyBase } from "../../../internal/utils";
import { Interpretation } from "./interpretation";
import { Message } from "./message";
import { SessionState } from "./sessionstate";
export declare class GetSessionResponse extends SpeakeasyBase {
    interpretations?: Interpretation[];
    messages?: Message[];
    sessionId?: string;
    sessionState?: SessionState;
}
