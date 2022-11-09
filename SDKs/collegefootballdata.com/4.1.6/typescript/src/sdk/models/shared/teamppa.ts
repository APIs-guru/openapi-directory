import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamPpaDefenseCumulative extends SpeakeasyBase {
  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class TeamPpaDefense extends SpeakeasyBase {
  @Metadata({ data: "json, name=cumulative" })
  cumulative?: TeamPpaDefenseCumulative;

  @Metadata({ data: "json, name=firstDown" })
  firstDown?: number;

  @Metadata({ data: "json, name=overall" })
  overall?: number;

  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=secondDown" })
  secondDown?: number;

  @Metadata({ data: "json, name=thirdDown" })
  thirdDown?: number;
}


export class TeamPpaOffenseCumulative extends SpeakeasyBase {
  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class TeamPpaOffense extends SpeakeasyBase {
  @Metadata({ data: "json, name=cumulative" })
  cumulative?: TeamPpaOffenseCumulative;

  @Metadata({ data: "json, name=firstDown" })
  firstDown?: number;

  @Metadata({ data: "json, name=overall" })
  overall?: number;

  @Metadata({ data: "json, name=passing" })
  passing?: number;

  @Metadata({ data: "json, name=rushing" })
  rushing?: number;

  @Metadata({ data: "json, name=secondDown" })
  secondDown?: number;

  @Metadata({ data: "json, name=thirdDown" })
  thirdDown?: number;
}


export class TeamPpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=defense" })
  defense?: TeamPpaDefense;

  @Metadata({ data: "json, name=offense" })
  offense?: TeamPpaOffense;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;
}
