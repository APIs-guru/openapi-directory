import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerSeasonStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=player" })
  player?: string;

  @Metadata({ data: "json, name=playerId" })
  playerId?: number;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=stat" })
  stat?: number;

  @Metadata({ data: "json, name=statType" })
  statType?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;
}
