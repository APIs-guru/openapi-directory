import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



// SessionList
/** 
 * Sessions List
**/
export class SessionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: Session })
  sessions: Session[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
