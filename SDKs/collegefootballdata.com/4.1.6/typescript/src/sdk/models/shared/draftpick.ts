import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DraftPickHometownInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=countryFips" })
  countryFips?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}


export class DraftPick extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collegeAthleteId" })
  collegeAthleteId?: number;

  @SpeakeasyMetadata({ data: "json, name=collegeConference" })
  collegeConference?: string;

  @SpeakeasyMetadata({ data: "json, name=collegeId" })
  collegeId?: number;

  @SpeakeasyMetadata({ data: "json, name=collegeTeam" })
  collegeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=hometownInfo" })
  hometownInfo?: DraftPickHometownInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nflAthleteId" })
  nflAthleteId?: number;

  @SpeakeasyMetadata({ data: "json, name=nflTeam" })
  nflTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: number;

  @SpeakeasyMetadata({ data: "json, name=pick" })
  pick?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=preDraftGrade" })
  preDraftGrade?: number;

  @SpeakeasyMetadata({ data: "json, name=preDraftPositionRanking" })
  preDraftPositionRanking?: number;

  @SpeakeasyMetadata({ data: "json, name=preDraftRanking" })
  preDraftRanking?: number;

  @SpeakeasyMetadata({ data: "json, name=round" })
  round?: number;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
