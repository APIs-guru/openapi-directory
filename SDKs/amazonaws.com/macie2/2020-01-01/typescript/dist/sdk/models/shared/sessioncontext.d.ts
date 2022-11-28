import { SpeakeasyBase } from "../../../internal/utils";
import { SessionContextAttributes } from "./sessioncontextattributes";
import { SessionIssuer } from "./sessionissuer";
/**
 * Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
**/
export declare class SessionContext extends SpeakeasyBase {
    attributes?: SessionContextAttributes;
    sessionIssuer?: SessionIssuer;
}
