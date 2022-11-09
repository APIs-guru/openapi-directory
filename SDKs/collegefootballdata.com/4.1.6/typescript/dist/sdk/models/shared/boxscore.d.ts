import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class BoxScorePlayersPpaAverage extends SpeakeasyBase {
    passing?: number;
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    rushing?: number;
    total?: number;
}
export declare class BoxScorePlayersPpaCumulative extends SpeakeasyBase {
    passing?: number;
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    rushing?: number;
    total?: number;
}
export declare class BoxScorePlayersPpa extends SpeakeasyBase {
    average?: BoxScorePlayersPpaAverage;
    cumulative?: BoxScorePlayersPpaCumulative;
    player?: string;
    position?: string;
    team?: string;
}
export declare class BoxScorePlayersUsage extends SpeakeasyBase {
    passing?: number;
    player?: string;
    position?: string;
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    rushing?: number;
    team?: string;
    total?: number;
}
export declare class BoxScorePlayers extends SpeakeasyBase {
    ppa?: BoxScorePlayersPpa[];
    usage?: BoxScorePlayersUsage[];
}
export declare class BoxScoreTeamsCumulativePpaOverall extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsCumulativePpaPassing extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsCumulativePpaRushing extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsCumulativePpa extends SpeakeasyBase {
    overall?: BoxScoreTeamsCumulativePpaOverall;
    passing?: BoxScoreTeamsCumulativePpaPassing;
    plays?: number;
    rushing?: BoxScoreTeamsCumulativePpaRushing;
    team?: string;
}
export declare class BoxScoreTeamsExplosivenessOverall extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsExplosiveness extends SpeakeasyBase {
    overall?: BoxScoreTeamsExplosivenessOverall;
    team?: string;
}
export declare class BoxScoreTeamsFieldPosition extends SpeakeasyBase {
    averageStart?: number;
    averageStartingPredictedPoints?: number;
    team?: string;
}
export declare class BoxScoreTeamsHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    team?: string;
    total?: number;
}
export declare class BoxScoreTeamsPpaOverall extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsPpaPassing extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsPpaRushing extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsPpa extends SpeakeasyBase {
    overall?: BoxScoreTeamsPpaOverall;
    passing?: BoxScoreTeamsPpaPassing;
    plays?: number;
    rushing?: BoxScoreTeamsPpaRushing;
    team?: string;
}
export declare class BoxScoreTeamsRushing extends SpeakeasyBase {
    lineYards?: number;
    lineYardsAverage?: number;
    openFieldYards?: number;
    openFieldYardsAverage?: number;
    powerSuccess?: number;
    secondLevelYards?: number;
    secondLevelYardsAverage?: number;
    stuffRate?: number;
    team?: string;
}
export declare class BoxScoreTeamsScoringOpportunities extends SpeakeasyBase {
    opportunities?: number;
    points?: number;
    pointsPerOpportunity?: number;
    team?: string;
}
export declare class BoxScoreTeamsSuccessRatesOverall extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsSuccessRatesPassingDowns extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsSuccessRatesStandardDowns extends SpeakeasyBase {
    quarter1?: number;
    quarter2?: number;
    quarter3?: number;
    quarter4?: number;
    total?: number;
}
export declare class BoxScoreTeamsSuccessRates extends SpeakeasyBase {
    overall?: BoxScoreTeamsSuccessRatesOverall;
    passingDowns?: BoxScoreTeamsSuccessRatesPassingDowns;
    standardDowns?: BoxScoreTeamsSuccessRatesStandardDowns;
    team?: string;
}
export declare class BoxScoreTeams extends SpeakeasyBase {
    cumulativePpa?: BoxScoreTeamsCumulativePpa[];
    explosiveness?: BoxScoreTeamsExplosiveness[];
    fieldPosition?: BoxScoreTeamsFieldPosition[];
    havoc?: BoxScoreTeamsHavoc[];
    ppa?: BoxScoreTeamsPpa[];
    rushing?: BoxScoreTeamsRushing[];
    scoringOpportunities?: BoxScoreTeamsScoringOpportunities[];
    successRates?: BoxScoreTeamsSuccessRates[];
}
export declare class BoxScore extends SpeakeasyBase {
    players?: BoxScorePlayers;
    teams?: BoxScoreTeams;
}
