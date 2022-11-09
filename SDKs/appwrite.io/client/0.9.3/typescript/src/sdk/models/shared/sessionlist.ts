import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Session } from "./session";


// SessionList
/** 
 * Sessions List
**/
export class SessionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessions", elemType: shared.Session })
  sessions: Session[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
