import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlayerGameTeamsCategoriesTypesAthletes extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class PlayerGameTeamsCategoriesTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=athletes", elemType: shared.PlayerGameTeamsCategoriesTypesAthletes })
  athletes?: PlayerGameTeamsCategoriesTypesAthletes[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PlayerGameTeamsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=types", elemType: shared.PlayerGameTeamsCategoriesTypes })
  types?: PlayerGameTeamsCategoriesTypes[];
}


export class PlayerGameTeamsSchool extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PlayerGameTeams extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.PlayerGameTeamsCategories })
  categories?: PlayerGameTeamsCategories[];

  @Metadata({ data: "json, name=homeAway" })
  homeAway?: boolean;

  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=school" })
  school?: PlayerGameTeamsSchool;
}


export class PlayerGame extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=teams", elemType: shared.PlayerGameTeams })
  teams?: PlayerGameTeams[];
}
