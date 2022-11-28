import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdvancedSeasonStatDefenseFieldPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averagePredictedPoints" })
  averagePredictedPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=averageStart" })
  averageStart?: number;
}


export class AdvancedSeasonStatDefenseHavoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db" })
  db?: number;

  @SpeakeasyMetadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class AdvancedSeasonStatDefensePassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatDefensePassingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatDefenseRushingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatDefenseStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatDefense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drives" })
  drives?: number;

  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=fieldPosition" })
  fieldPosition?: AdvancedSeasonStatDefenseFieldPosition;

  @SpeakeasyMetadata({ data: "json, name=havoc" })
  havoc?: AdvancedSeasonStatDefenseHavoc;

  @SpeakeasyMetadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedSeasonStatDefensePassingDowns;

  @SpeakeasyMetadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedSeasonStatDefensePassingPlays;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=pointsPerOpportunity" })
  pointsPerOpportunity?: number;

  @SpeakeasyMetadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedSeasonStatDefenseRushingPlays;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedSeasonStatDefenseStandardDowns;

  @SpeakeasyMetadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatOffenseFieldPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averagePredictedPoints" })
  averagePredictedPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=averageStart" })
  averageStart?: number;
}


export class AdvancedSeasonStatOffenseHavoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db" })
  db?: number;

  @SpeakeasyMetadata({ data: "json, name=frontSeven" })
  frontSeven?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class AdvancedSeasonStatOffensePassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatOffensePassingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatOffenseRushingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStatOffenseStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;
}


export class AdvancedSeasonStatOffense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drives" })
  drives?: number;

  @SpeakeasyMetadata({ data: "json, name=explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=fieldPosition" })
  fieldPosition?: AdvancedSeasonStatOffenseFieldPosition;

  @SpeakeasyMetadata({ data: "json, name=havoc" })
  havoc?: AdvancedSeasonStatOffenseHavoc;

  @SpeakeasyMetadata({ data: "json, name=lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata({ data: "json, name=lineYardsTotal" })
  lineYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata({ data: "json, name=openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: AdvancedSeasonStatOffensePassingDowns;

  @SpeakeasyMetadata({ data: "json, name=passingPlays" })
  passingPlays?: AdvancedSeasonStatOffensePassingPlays;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=pointsPerOpportunity" })
  pointsPerOpportunity?: number;

  @SpeakeasyMetadata({ data: "json, name=powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=rushingPlays" })
  rushingPlays?: AdvancedSeasonStatOffenseRushingPlays;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata({ data: "json, name=secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: AdvancedSeasonStatOffenseStandardDowns;

  @SpeakeasyMetadata({ data: "json, name=stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata({ data: "json, name=successRate" })
  successRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;
}


export class AdvancedSeasonStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: AdvancedSeasonStatDefense;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: AdvancedSeasonStatOffense;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}
