import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { Intent } from "./intent";


// SessionState
/** 
 * The state of the user's session with Amazon Lex V2.
**/
export class SessionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: ActiveContext[];

  @Metadata({ data: "json, name=dialogAction" })
  dialogAction?: DialogAction;

  @Metadata({ data: "json, name=intent" })
  intent?: Intent;

  @Metadata({ data: "json, name=originatingRequestId" })
  originatingRequestId?: string;

  @Metadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
}
