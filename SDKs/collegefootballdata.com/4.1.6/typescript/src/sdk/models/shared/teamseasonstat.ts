import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamSeasonStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=statName" })
  statName?: string;

  @SpeakeasyMetadata({ data: "json, name=statValue" })
  statValue?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}
