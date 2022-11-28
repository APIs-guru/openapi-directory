import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamRecordAwayGames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=games" })
  games?: number;

  @SpeakeasyMetadata({ data: "json, name=losses" })
  losses?: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties?: number;

  @SpeakeasyMetadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecordConferenceGames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=games" })
  games?: number;

  @SpeakeasyMetadata({ data: "json, name=losses" })
  losses?: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties?: number;

  @SpeakeasyMetadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecordHomeGames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=games" })
  games?: number;

  @SpeakeasyMetadata({ data: "json, name=losses" })
  losses?: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties?: number;

  @SpeakeasyMetadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecordTotal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=games" })
  games?: number;

  @SpeakeasyMetadata({ data: "json, name=losses" })
  losses?: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties?: number;

  @SpeakeasyMetadata({ data: "json, name=wins" })
  wins?: number;
}


export class TeamRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayGames" })
  awayGames?: TeamRecordAwayGames;

  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=conferenceGames" })
  conferenceGames?: TeamRecordConferenceGames;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=homeGames" })
  homeGames?: TeamRecordHomeGames;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: TeamRecordTotal;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
