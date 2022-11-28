import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdvancedGameStatDefensePassingDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
}
export declare class AdvancedGameStatDefensePassingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedGameStatDefenseRushingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedGameStatDefenseStandardDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
}
export declare class AdvancedGameStatDefense extends SpeakeasyBase {
    drives?: number;
    explosiveness?: number;
    lineYards?: number;
    lineYardsTotal?: number;
    openFieldYards?: number;
    openFieldYardsTotal?: number;
    passingDowns?: AdvancedGameStatDefensePassingDowns;
    passingPlays?: AdvancedGameStatDefensePassingPlays;
    plays?: number;
    powerSuccess?: number;
    ppa?: number;
    rushingPlays?: AdvancedGameStatDefenseRushingPlays;
    secondLevelYards?: number;
    secondLevelYardsTotal?: number;
    standardDowns?: AdvancedGameStatDefenseStandardDowns;
    stuffRate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedGameStatOffensePassingDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
}
export declare class AdvancedGameStatOffensePassingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedGameStatOffenseRushingPlays extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedGameStatOffenseStandardDowns extends SpeakeasyBase {
    explosiveness?: number;
    ppa?: number;
    successRate?: number;
}
export declare class AdvancedGameStatOffense extends SpeakeasyBase {
    drives?: number;
    explosiveness?: number;
    lineYards?: number;
    lineYardsTotal?: number;
    openFieldYards?: number;
    openFieldYardsTotal?: number;
    passingDowns?: AdvancedGameStatOffensePassingDowns;
    passingPlays?: AdvancedGameStatOffensePassingPlays;
    plays?: number;
    powerSuccess?: number;
    ppa?: number;
    rushingPlays?: AdvancedGameStatOffenseRushingPlays;
    secondLevelYards?: number;
    secondLevelYardsTotal?: number;
    standardDowns?: AdvancedGameStatOffenseStandardDowns;
    stuffRate?: number;
    successRate?: number;
    totalPpa?: number;
}
export declare class AdvancedGameStat extends SpeakeasyBase {
    defense?: AdvancedGameStatDefense;
    gameId?: number;
    offense?: AdvancedGameStatOffense;
    opponent?: string;
    season?: number;
    team?: string;
    week?: number;
}
