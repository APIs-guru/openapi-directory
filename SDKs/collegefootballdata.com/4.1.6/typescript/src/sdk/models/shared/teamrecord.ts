import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamRecordAwayGames extends SpeakeasyBase {
  @Metadata({ data: "json, name=games" })
  games?: number;

  @Metadata({ data: "json, name=losses" })
  losses?: number;

  @Metadata({ data: "json, name=ties" })
  ties?: number;

  @Metadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecordConferenceGames extends SpeakeasyBase {
  @Metadata({ data: "json, name=games" })
  games?: number;

  @Metadata({ data: "json, name=losses" })
  losses?: number;

  @Metadata({ data: "json, name=ties" })
  ties?: number;

  @Metadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecordHomeGames extends SpeakeasyBase {
  @Metadata({ data: "json, name=games" })
  games?: number;

  @Metadata({ data: "json, name=losses" })
  losses?: number;

  @Metadata({ data: "json, name=ties" })
  ties?: number;

  @Metadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecordTotal extends SpeakeasyBase {
  @Metadata({ data: "json, name=games" })
  games?: number;

  @Metadata({ data: "json, name=losses" })
  losses?: number;

  @Metadata({ data: "json, name=ties" })
  ties?: number;

  @Metadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayGames" })
  awayGames?: TeamRecordAwayGames;

  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=conferenceGames" })
  conferenceGames?: TeamRecordConferenceGames;

  @Metadata({ data: "json, name=division" })
  division?: string;

  @Metadata({ data: "json, name=homeGames" })
  homeGames?: TeamRecordHomeGames;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=total" })
  total?: TeamRecordTotal;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
