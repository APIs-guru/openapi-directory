import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdvancedSeasonStatDefenseFieldPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=averagePredictedPoints" })
  averagePredictedPoints?: number;

  @Metadata({ data: "json, name=averageStart" })
  averageStart?: number;
}


export class AdvancedSeasonStatDefenseHavoc extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db?: number;

  @Metadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class AdvancedSeasonStatDefensePassingDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatDefensePassingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatDefenseRushingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatDefenseStandardDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatDefense extends SpeakeasyBase {
  @Metadata({ data: "json, name=drives" })
  drives?: number;

  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=fieldPosition" })
  fieldPosition?: AdvancedSeasonStatDefenseFieldPosition;

  @Metadata({ data: "json, name=havoc" })
  havoc?: AdvancedSeasonStatDefenseHavoc;

  @Metadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @Metadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @Metadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @Metadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedSeasonStatDefensePassingDowns;

  @Metadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedSeasonStatDefensePassingPlays;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=pointsPerOpportunity" })
  pointsPerOpportunity?: number;

  @Metadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedSeasonStatDefenseRushingPlays;

  @Metadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @Metadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedSeasonStatDefenseStandardDowns;

  @Metadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatOffenseFieldPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=averagePredictedPoints" })
  averagePredictedPoints?: number;

  @Metadata({ data: "json, name=averageStart" })
  averageStart?: number;
}


export class AdvancedSeasonStatOffenseHavoc extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db?: number;

  @Metadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class AdvancedSeasonStatOffensePassingDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatOffensePassingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatOffenseRushingPlays extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatOffenseStandardDowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatOffense extends SpeakeasyBase {
  @Metadata({ data: "json, name=drives" })
  drives?: number;

  @Metadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @Metadata({ data: "json, name=fieldPosition" })
  fieldPosition?: AdvancedSeasonStatOffenseFieldPosition;

  @Metadata({ data: "json, name=havoc" })
  havoc?: AdvancedSeasonStatOffenseHavoc;

  @Metadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @Metadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @Metadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @Metadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedSeasonStatOffensePassingDowns;

  @Metadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedSeasonStatOffensePassingPlays;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=pointsPerOpportunity" })
  pointsPerOpportunity?: number;

  @Metadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedSeasonStatOffenseRushingPlays;

  @Metadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @Metadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedSeasonStatOffenseStandardDowns;

  @Metadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @Metadata({ data: "json, name=successRate" })
  successRate?: number;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=defense" })
  defense?: AdvancedSeasonStatDefense;

  @Metadata({ data: "json, name=offense" })
  offense?: AdvancedSeasonStatOffense;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;
}
