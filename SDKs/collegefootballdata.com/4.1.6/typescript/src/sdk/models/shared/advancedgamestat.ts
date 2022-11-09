import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdvancedGameStatDefensePassingDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatDefensePassingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatDefenseRushingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatDefenseStandardDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatDefense extends SpeakeasyBase {
  @Metadata({ data: "json, name=drives" })
  drives?: number;

  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @Metadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @Metadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @Metadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedGameStatDefensePassingDowns;

  @Metadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedGameStatDefensePassingPlays;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedGameStatDefenseRushingPlays;

  @Metadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @Metadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedGameStatDefenseStandardDowns;

  @Metadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatOffensePassingDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatOffensePassingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatOffenseRushingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStatOffenseStandardDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedGameStatOffense extends SpeakeasyBase {
  @Metadata({ data: "json, name=drives" })
  drives?: number;

  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @Metadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @Metadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @Metadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedGameStatOffensePassingDowns;

  @Metadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedGameStatOffensePassingPlays;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedGameStatOffenseRushingPlays;

  @Metadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @Metadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedGameStatOffenseStandardDowns;

  @Metadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedGameStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=defense" })
  defense?: AdvancedGameStatDefense;

  @Metadata({ data: "json, name=gameId" })
  gameId?: number;

  @Metadata({ data: "json, name=offense" })
  offense?: AdvancedGameStatOffense;

  @Metadata({ data: "json, name=opponent" })
  opponent?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
