import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CoachSeasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=games" })
  games?: number;

  @SpeakeasyMetadata({ data: "json, name=losses" })
  losses?: number;

  @SpeakeasyMetadata({ data: "json, name=postseason_rank" })
  postseasonRank?: number;

  @SpeakeasyMetadata({ data: "json, name=preseason_rank" })
  preseasonRank?: number;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=sp_defense" })
  spDefense?: number;

  @SpeakeasyMetadata({ data: "json, name=sp_offense" })
  spOffense?: number;

  @SpeakeasyMetadata({ data: "json, name=sp_overall" })
  spOverall?: number;

  @SpeakeasyMetadata({ data: "json, name=srs" })
  srs?: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties?: number;

  @SpeakeasyMetadata({ data: "json, name=wins" })
  wins?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}


export class Coach extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=seasons", elemType: CoachSeasons })
  seasons?: CoachSeasons[];
}
