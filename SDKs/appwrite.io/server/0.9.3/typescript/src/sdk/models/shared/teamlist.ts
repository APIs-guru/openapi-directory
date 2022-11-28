import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";



// TeamList
/** 
 * Teams List
**/
export class TeamList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;

  @SpeakeasyMetadata({ data: "json, name=teams", elemType: Team })
  teams: Team[];
}
