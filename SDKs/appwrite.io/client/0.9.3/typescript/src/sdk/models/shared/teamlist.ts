import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Team } from "./team";


// TeamList
/** 
 * Teams List
**/
export class TeamList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sum" })
  sum: number;

  @Metadata({ data: "json, name=teams", elemType: shared.Team })
  teams: Team[];
}
