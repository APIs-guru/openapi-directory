import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { IntentSummary } from "./intentsummary";



export class GetSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: ActiveContext })
  activeContexts?: ActiveContext[];

  @SpeakeasyMetadata({ data: "json, name=dialogAction" })
  dialogAction?: DialogAction;

  @SpeakeasyMetadata({ data: "json, name=recentIntentSummaryView", elemType: IntentSummary })
  recentIntentSummaryView?: IntentSummary[];

  @SpeakeasyMetadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
