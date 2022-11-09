import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionContextAttributes } from "./sessioncontextattributes";
import { SessionIssuer } from "./sessionissuer";


// SessionContext
/** 
 * Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
**/
export class SessionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: SessionContextAttributes;

  @Metadata({ data: "json, name=sessionIssuer" })
  sessionIssuer?: SessionIssuer;
}
