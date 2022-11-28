import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyLeaderboardEntry } from "./destinyhistoricalstatsdestinyleaderboardentry";



export class DestinyHistoricalStatsDestinyLeaderboard extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyLeaderboardEntry })
  entries?: DestinyHistoricalStatsDestinyLeaderboardEntry[];

  @SpeakeasyMetadata()
  statId?: string;
}
