import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { Intent } from "./intent";



// SessionState
/** 
 * The state of the user's session with Amazon Lex V2.
**/
export class SessionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: ActiveContext })
  activeContexts?: ActiveContext[];

  @SpeakeasyMetadata({ data: "json, name=dialogAction" })
  dialogAction?: DialogAction;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: Intent;

  @SpeakeasyMetadata({ data: "json, name=originatingRequestId" })
  originatingRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
}
