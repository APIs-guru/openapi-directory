import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BoxScorePlayersPpaAverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScorePlayersPpaCumulative extends SpeakeasyBase {
  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScorePlayersPpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: BoxScorePlayersPpaAverage;

  @Metadata({ data: "json, name=cumulative" })
  cumulative?: BoxScorePlayersPpaCumulative;

  @Metadata({ data: "json, name=player" })
  player?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScorePlayersUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=player" })
  player?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScorePlayers extends SpeakeasyBase {
  @Metadata({ data: "json, name=ppa", elemType: shared.BoxScorePlayersPpa })
  ppa?: BoxScorePlayersPpa[];

  @Metadata({ data: "json, name=usage", elemType: shared.BoxScorePlayersUsage })
  usage?: BoxScorePlayersUsage[];
}


export class BoxScoreTeamsCumulativePpaOverall extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsCumulativePpaPassing extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsCumulativePpaRushing extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsCumulativePpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsCumulativePpaOverall;

  @Metadata({ data: "json, name=passing" })
  passing?: BoxScoreTeamsCumulativePpaPassing;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: BoxScoreTeamsCumulativePpaRushing;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsExplosivenessOverall extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsExplosiveness extends SpeakeasyBase {
  @Metadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsExplosivenessOverall;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsFieldPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageStart" })
  averageStart?: number;

  @Metadata({ data: "json, name=averageStartingPredictedPoints" })
  averageStartingPredictedPoints?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsHavoc extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db?: number;

  @Metadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpaOverall extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpaPassing extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpaRushing extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsPpaOverall;

  @Metadata({ data: "json, name=passing" })
  passing?: BoxScoreTeamsPpaPassing;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: BoxScoreTeamsPpaRushing;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsRushing extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @Metadata({ data: "json, name=lineYardsAverage" })
  lineYardsAverage?: number;

  @Metadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @Metadata({ data: "json, name=openFieldYardsAverage" })
  openFieldYardsAverage?: number;

  @Metadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @Metadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @Metadata({ data: "json, name=secondLevelYardsAverage" })
  secondLevelYardsAverage?: number;

  @Metadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsScoringOpportunities extends SpeakeasyBase {
  @Metadata({ data: "json, name=opportunities" })
  opportunities?: number;

  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=pointsPerOpportunity" })
  pointsPerOpportunity?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsSuccessRatesOverall extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsSuccessRatesPassingDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsSuccessRatesStandardDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @Metadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @Metadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @Metadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsSuccessRates extends SpeakeasyBase {
  @Metadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsSuccessRatesOverall;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: BoxScoreTeamsSuccessRatesPassingDowns;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: BoxScoreTeamsSuccessRatesStandardDowns;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeams extends SpeakeasyBase {
  @Metadata({ data: "json, name=cumulativePpa", elemType: shared.BoxScoreTeamsCumulativePpa })
  cumulativePpa?: BoxScoreTeamsCumulativePpa[];

  @Metadata({ data: "json, name=explosiveness", elemType: shared.BoxScoreTeamsExplosiveness })
  explosiveness?: BoxScoreTeamsExplosiveness[];

  @Metadata({ data: "json, name=fieldPosition", elemType: shared.BoxScoreTeamsFieldPosition })
  fieldPosition?: BoxScoreTeamsFieldPosition[];

  @Metadata({ data: "json, name=havoc", elemType: shared.BoxScoreTeamsHavoc })
  havoc?: BoxScoreTeamsHavoc[];

  @Metadata({ data: "json, name=ppa", elemType: shared.BoxScoreTeamsPpa })
  ppa?: BoxScoreTeamsPpa[];

  @Metadata({ data: "json, name=rushing", elemType: shared.BoxScoreTeamsRushing })
  rushing?: BoxScoreTeamsRushing[];

  @Metadata({ data: "json, name=scoringOpportunities", elemType: shared.BoxScoreTeamsScoringOpportunities })
  scoringOpportunities?: BoxScoreTeamsScoringOpportunities[];

  @Metadata({ data: "json, name=successRates", elemType: shared.BoxScoreTeamsSuccessRates })
  successRates?: BoxScoreTeamsSuccessRates[];
}


export class BoxScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=players" })
  players?: BoxScorePlayers;

  @Metadata({ data: "json, name=teams" })
  teams?: BoxScoreTeams;
}
