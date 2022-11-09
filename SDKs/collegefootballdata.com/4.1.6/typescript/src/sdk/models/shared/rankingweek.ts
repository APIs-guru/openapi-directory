import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RankingWeekPollsRanks extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=firstPlaceVotes" })
  firstPlaceVotes?: number;

  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=school" })
  school?: string;
}


export class RankingWeekPolls extends SpeakeasyBase {
  @Metadata({ data: "json, name=poll" })
  poll?: string;

  @Metadata({ data: "json, name=ranks", elemType: shared.RankingWeekPollsRanks })
  ranks?: RankingWeekPollsRanks[];
}


export class RankingWeek extends SpeakeasyBase {
  @Metadata({ data: "json, name=polls", elemType: shared.RankingWeekPolls })
  polls?: RankingWeekPolls[];

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
