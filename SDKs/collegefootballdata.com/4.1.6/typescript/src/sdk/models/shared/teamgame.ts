import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamGameTeamsStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class TeamGameTeams extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=homeAway" })
  homeAway?: boolean;

  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=stats", elemType: shared.TeamGameTeamsStats })
  stats?: TeamGameTeamsStats[];
}


export class TeamGame extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=teams", elemType: shared.TeamGameTeams })
  teams?: TeamGameTeams[];
}
