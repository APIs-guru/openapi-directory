import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { IntentSummary } from "./intentsummary";
export declare class GetSessionResponse extends SpeakeasyBase {
    activeContexts?: ActiveContext[];
    dialogAction?: DialogAction;
    recentIntentSummaryView?: IntentSummary[];
    sessionAttributes?: Map<string, string>;
    sessionId?: string;
}
