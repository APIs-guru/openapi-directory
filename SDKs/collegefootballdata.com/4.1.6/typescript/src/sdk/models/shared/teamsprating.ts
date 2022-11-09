import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamSpRatingDefenseHavoc extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db?: number;

  @Metadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class TeamSpRatingDefense extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=havoc" })
  havoc?: TeamSpRatingDefenseHavoc;

  @Metadata({ data: "json, name=pasing" })
  pasing?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: number;

  @Metadata({ data: "json, name=ranking" })
  ranking?: number;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: number;

  @Metadata({ data: "json, name=success" })
  success?: number;
}


export class TeamSpRatingOffense extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=pace" })
  pace?: number;

  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: number;

  @Metadata({ data: "json, name=ranking" })
  ranking?: number;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=runRate" })
  runRate?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: number;

  @Metadata({ data: "json, name=success" })
  success?: number;
}


export class TeamSpRatingSpecialTeams extends SpeakeasyBase {
  @Metadata({ data: "json, name=rating" })
  rating?: number;
}


export class TeamSpRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=defense" })
  defense?: TeamSpRatingDefense;

  @Metadata({ data: "json, name=offense" })
  offense?: TeamSpRatingOffense;

  @Metadata({ data: "json, name=ranking" })
  ranking?: number;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=secondOrderWins" })
  secondOrderWins?: number;

  @Metadata({ data: "json, name=sos" })
  sos?: number;

  @Metadata({ data: "json, name=specialTeams" })
  specialTeams?: TeamSpRatingSpecialTeams;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
