import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DraftPickHometownInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=countryFips" })
  countryFips?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=state" })
  state?: string;
}


export class DraftPick extends SpeakeasyBase {
  @Metadata({ data: "json, name=collegeAthleteId" })
  collegeAthleteId?: number;

  @Metadata({ data: "json, name=collegeConference" })
  collegeConference?: string;

  @Metadata({ data: "json, name=collegeId" })
  collegeId?: number;

  @Metadata({ data: "json, name=collegeTeam" })
  collegeTeam?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=hometownInfo" })
  hometownInfo?: DraftPickHometownInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nflAthleteId" })
  nflAthleteId?: number;

  @Metadata({ data: "json, name=nflTeam" })
  nflTeam?: string;

  @Metadata({ data: "json, name=overall" })
  overall?: number;

  @Metadata({ data: "json, name=pick" })
  pick?: number;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=preDraftGrade" })
  preDraftGrade?: number;

  @Metadata({ data: "json, name=preDraftPositionRanking" })
  preDraftPositionRanking?: number;

  @Metadata({ data: "json, name=preDraftRanking" })
  preDraftRanking?: number;

  @Metadata({ data: "json, name=round" })
  round?: number;

  @Metadata({ data: "json, name=weight" })
  weight?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
