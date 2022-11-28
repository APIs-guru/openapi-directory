import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoxScorePlayersPpaAverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScorePlayersPpaCumulative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScorePlayersPpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: BoxScorePlayersPpaAverage;

  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: BoxScorePlayersPpaCumulative;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScorePlayersUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScorePlayers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ppa", elemType: BoxScorePlayersPpa })
  ppa?: BoxScorePlayersPpa[];

  @SpeakeasyMetadata({ data: "json, name=usage", elemType: BoxScorePlayersUsage })
  usage?: BoxScorePlayersUsage[];
}


export class BoxScoreTeamsCumulativePpaOverall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsCumulativePpaPassing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsCumulativePpaRushing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsCumulativePpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsCumulativePpaOverall;

  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: BoxScoreTeamsCumulativePpaPassing;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: BoxScoreTeamsCumulativePpaRushing;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsExplosivenessOverall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsExplosiveness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsExplosivenessOverall;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsFieldPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageStart" })
  averageStart?: number;

  @SpeakeasyMetadata({ data: "json, name=averageStartingPredictedPoints" })
  averageStartingPredictedPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsHavoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db" })
  db?: number;

  @SpeakeasyMetadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpaOverall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpaPassing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpaRushing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsPpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsPpaOverall;

  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: BoxScoreTeamsPpaPassing;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: BoxScoreTeamsPpaRushing;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsRushing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYardsAverage" })
  lineYardsAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYardsAverage" })
  openFieldYardsAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYardsAverage" })
  secondLevelYardsAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsScoringOpportunities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opportunities" })
  opportunities?: number;

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number;

  @SpeakeasyMetadata({ data: "json, name=pointsPerOpportunity" })
  pointsPerOpportunity?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeamsSuccessRatesOverall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsSuccessRatesPassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsSuccessRatesStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quarter1" })
  quarter1?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter2" })
  quarter2?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter3" })
  quarter3?: number;

  @SpeakeasyMetadata({ data: "json, name=quarter4" })
  quarter4?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class BoxScoreTeamsSuccessRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: BoxScoreTeamsSuccessRatesOverall;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: BoxScoreTeamsSuccessRatesPassingDowns;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: BoxScoreTeamsSuccessRatesStandardDowns;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


export class BoxScoreTeams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cumulativePpa", elemType: BoxScoreTeamsCumulativePpa })
  cumulativePpa?: BoxScoreTeamsCumulativePpa[];

  @SpeakeasyMetadata({ data: "json, name=explosiveness", elemType: BoxScoreTeamsExplosiveness })
  explosiveness?: BoxScoreTeamsExplosiveness[];

  @SpeakeasyMetadata({ data: "json, name=fieldPosition", elemType: BoxScoreTeamsFieldPosition })
  fieldPosition?: BoxScoreTeamsFieldPosition[];

  @SpeakeasyMetadata({ data: "json, name=havoc", elemType: BoxScoreTeamsHavoc })
  havoc?: BoxScoreTeamsHavoc[];

  @SpeakeasyMetadata({ data: "json, name=ppa", elemType: BoxScoreTeamsPpa })
  ppa?: BoxScoreTeamsPpa[];

  @SpeakeasyMetadata({ data: "json, name=rushing", elemType: BoxScoreTeamsRushing })
  rushing?: BoxScoreTeamsRushing[];

  @SpeakeasyMetadata({ data: "json, name=scoringOpportunities", elemType: BoxScoreTeamsScoringOpportunities })
  scoringOpportunities?: BoxScoreTeamsScoringOpportunities[];

  @SpeakeasyMetadata({ data: "json, name=successRates", elemType: BoxScoreTeamsSuccessRates })
  successRates?: BoxScoreTeamsSuccessRates[];
}


export class BoxScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=players" })
  players?: BoxScorePlayers;

  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams?: BoxScoreTeams;
}
