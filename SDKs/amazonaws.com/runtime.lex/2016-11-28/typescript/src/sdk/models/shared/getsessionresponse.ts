import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { IntentSummary } from "./intentsummary";


export class GetSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: ActiveContext[];

  @Metadata({ data: "json, name=dialogAction" })
  dialogAction?: DialogAction;

  @Metadata({ data: "json, name=recentIntentSummaryView", elemType: shared.IntentSummary })
  recentIntentSummaryView?: IntentSummary[];

  @Metadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
