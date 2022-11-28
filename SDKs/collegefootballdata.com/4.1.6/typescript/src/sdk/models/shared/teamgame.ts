import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamGameTeamsStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class TeamGameTeams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=homeAway" })
  homeAway?: boolean;

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=stats", elemType: TeamGameTeamsStats })
  stats?: TeamGameTeamsStats[];
}


export class TeamGame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=teams", elemType: TeamGameTeams })
  teams?: TeamGameTeams[];
}
