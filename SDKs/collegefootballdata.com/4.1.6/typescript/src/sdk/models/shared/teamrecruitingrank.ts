import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamRecruitingRank extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
