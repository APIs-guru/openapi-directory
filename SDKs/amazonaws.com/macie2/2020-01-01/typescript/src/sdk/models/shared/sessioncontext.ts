import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionContextAttributes } from "./sessioncontextattributes";
import { SessionIssuer } from "./sessionissuer";



// SessionContext
/** 
 * Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
**/
export class SessionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: SessionContextAttributes;

  @SpeakeasyMetadata({ data: "json, name=sessionIssuer" })
  sessionIssuer?: SessionIssuer;
}
