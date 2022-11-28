import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamSpRatingDefenseHavoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db" })
  db?: number;

  @SpeakeasyMetadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class TeamSpRatingDefense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=havoc" })
  havoc?: TeamSpRatingDefenseHavoc;

  @SpeakeasyMetadata({ data: "json, name=pasing" })
  pasing?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: number;

  @SpeakeasyMetadata({ data: "json, name=ranking" })
  ranking?: number;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: number;
}


export class TeamSpRatingOffense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=pace" })
  pace?: number;

  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: number;

  @SpeakeasyMetadata({ data: "json, name=ranking" })
  ranking?: number;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=runRate" })
  runRate?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: number;
}


export class TeamSpRatingSpecialTeams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;
}


export class TeamSpRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: TeamSpRatingDefense;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: TeamSpRatingOffense;

  @SpeakeasyMetadata({ data: "json, name=ranking" })
  ranking?: number;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=secondOrderWins" })
  secondOrderWins?: number;

  @SpeakeasyMetadata({ data: "json, name=sos" })
  sos?: number;

  @SpeakeasyMetadata({ data: "json, name=specialTeams" })
  specialTeams?: TeamSpRatingSpecialTeams;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
