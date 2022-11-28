import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerGameTeamsCategoriesTypesAthletes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class PlayerGameTeamsCategoriesTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=athletes", elemType: PlayerGameTeamsCategoriesTypesAthletes })
  athletes?: PlayerGameTeamsCategoriesTypesAthletes[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PlayerGameTeamsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: PlayerGameTeamsCategoriesTypes })
  types?: PlayerGameTeamsCategoriesTypes[];
}


export class PlayerGameTeamsSchool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PlayerGameTeams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: PlayerGameTeamsCategories })
  categories?: PlayerGameTeamsCategories[];

  @SpeakeasyMetadata({ data: "json, name=homeAway" })
  homeAway?: boolean;

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: PlayerGameTeamsSchool;
}


export class PlayerGame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=teams", elemType: PlayerGameTeams })
  teams?: PlayerGameTeams[];
}
