import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerSeasonStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: string;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: number;

  @SpeakeasyMetadata({ data: "json, name=statType" })
  statType?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}
