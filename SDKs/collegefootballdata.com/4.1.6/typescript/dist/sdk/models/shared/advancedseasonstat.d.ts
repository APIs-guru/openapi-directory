import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AdvancedSeasonStatDefenseFieldPosition extends SpeakeasyBase {
    averagePredictedPoints?: number;
    averageStart?: number;
}
export declare class AdvancedSeasonStatDefenseHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    total?: number;
}
export declare class AdvancedSeasonStatDefensePassingDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
}
export declare class AdvancedSeasonStatDefensePassingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedSeasonStatDefenseRushingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedSeasonStatDefenseStandardDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
}
export declare class AdvancedSeasonStatDefense extends SpeakeasyBase {
    drives?: number;
    explosiveness?: number;
    fieldPosition?: AdvancedSeasonStatDefenseFieldPosition;
    havoc?: AdvancedSeasonStatDefenseHavoc;
    lineYards?: number;
    lineYardsTotal?: number;
    openFieldYards?: number;
    openFieldYardsTotal?: number;
    passingDowns?: AdvancedSeasonStatDefensePassingDowns;
    passingPlays?: AdvancedSeasonStatDefensePassingPlays;
    plays?: number;
    pointsPerOpportunity?: number;
    powerSuccess?: number;
    ppa?: number;
    rushingPlays?: AdvancedSeasonStatDefenseRushingPlays;
    secondLevelYards?: number;
    secondLevelYardsTotal?: number;
    standardDowns?: AdvancedSeasonStatDefenseStandardDowns;
    stuffRate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedSeasonStatOffenseFieldPosition extends SpeakeasyBase {
    averagePredictedPoints?: number;
    averageStart?: number;
}
export declare class AdvancedSeasonStatOffenseHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    total?: number;
}
export declare class AdvancedSeasonStatOffensePassingDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
}
export declare class AdvancedSeasonStatOffensePassingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedSeasonStatOffenseRushingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedSeasonStatOffenseStandardDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    rate?: number;
    successRate?: number;
}
export declare class AdvancedSeasonStatOffense extends SpeakeasyBase {
    drives?: number;
    explosiveness?: number;
    fieldPosition?: AdvancedSeasonStatOffenseFieldPosition;
    havoc?: AdvancedSeasonStatOffenseHavoc;
    lineYards?: number;
    lineYardsTotal?: number;
    openFieldYards?: number;
    openFieldYardsTotal?: number;
    passingDowns?: AdvancedSeasonStatOffensePassingDowns;
    passingPlays?: AdvancedSeasonStatOffensePassingPlays;
    plays?: number;
    pointsPerOpportunity?: number;
    powerSuccess?: number;
    ppa?: number;
    rushingPlays?: AdvancedSeasonStatOffenseRushingPlays;
    secondLevelYards?: number;
    secondLevelYardsTotal?: number;
    standardDowns?: AdvancedSeasonStatOffenseStandardDowns;
    stuffRate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedSeasonStat extends SpeakeasyBase {
    conference?: string;
    defense?: AdvancedSeasonStatDefense;
    offense?: AdvancedSeasonStatOffense;
    season?: number;
    team?: string;
}
