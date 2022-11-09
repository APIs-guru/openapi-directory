import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CoachSeasons extends SpeakeasyBase {
  @Metadata({ data: "json, name=games" })
  games?: number;

  @Metadata({ data: "json, name=losses" })
  losses?: number;

  @Metadata({ data: "json, name=postseason_rank" })
  postseasonRank?: number;

  @Metadata({ data: "json, name=preseason_rank" })
  preseasonRank?: number;

  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=sp_defense" })
  spDefense?: number;

  @Metadata({ data: "json, name=sp_offense" })
  spOffense?: number;

  @Metadata({ data: "json, name=sp_overall" })
  spOverall?: number;

  @Metadata({ data: "json, name=srs" })
  srs?: number;

  @Metadata({ data: "json, name=ties" })
  ties?: number;

  @Metadata({ data: "json, name=wins" })
  wins?: number;

  @Metadata({ data: "json, name=year" })
  year?: string;
}


export class Coach extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=seasons", elemType: shared.CoachSeasons })
  seasons?: CoachSeasons[];
}
