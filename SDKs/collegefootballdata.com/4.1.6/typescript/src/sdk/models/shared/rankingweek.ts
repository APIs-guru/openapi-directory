import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RankingWeekPollsRanks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=firstPlaceVotes" })
  firstPlaceVotes?: number;

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;
}


export class RankingWeekPolls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=poll" })
  poll?: string;

  @SpeakeasyMetadata({ data: "json, name=ranks", elemType: RankingWeekPollsRanks })
  ranks?: RankingWeekPollsRanks[];
}


export class RankingWeek extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=polls", elemType: RankingWeekPolls })
  polls?: RankingWeekPolls[];

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
