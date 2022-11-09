import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamSeasonStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=statName" })
  statName?: string;

  @Metadata({ data: "json, name=statValue" })
  statValue?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;
}
