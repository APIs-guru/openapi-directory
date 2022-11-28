import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdvancedGameStatDefensePassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatDefensePassingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatDefenseRushingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatDefenseStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatDefense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drives" })
  drives?: number;

  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedGameStatDefensePassingDowns;

  @SpeakeasyMetadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedGameStatDefensePassingPlays;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedGameStatDefenseRushingPlays;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedGameStatDefenseStandardDowns;

  @SpeakeasyMetadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatOffensePassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatOffensePassingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatOffenseRushingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatOffenseStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatOffense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drives" })
  drives?: number;

  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedGameStatOffensePassingDowns;

  @SpeakeasyMetadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedGameStatOffensePassingPlays;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedGameStatOffenseRushingPlays;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedGameStatOffenseStandardDowns;

  @SpeakeasyMetadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: AdvancedGameStatDefense;

  @SpeakeasyMetadata({ data: "json, name=gameId" })
  gameId?: number;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: AdvancedGameStatOffense;

  @SpeakeasyMetadata({ data: "json, name=opponent" })
  opponent?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
