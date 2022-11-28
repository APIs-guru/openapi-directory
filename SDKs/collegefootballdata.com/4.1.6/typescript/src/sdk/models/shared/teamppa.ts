import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamPpaDefenseCumulative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class TeamPpaDefense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: TeamPpaDefenseCumulative;

  @SpeakeasyMetadata({ data: "json, name=firstDown" })
  firstDown?: number;

  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: number;

  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=secondDown" })
  secondDown?: number;

  @SpeakeasyMetadata({ data: "json, name=thirdDown" })
  thirdDown?: number;
}


export class TeamPpaOffenseCumulative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class TeamPpaOffense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: TeamPpaOffenseCumulative;

  @SpeakeasyMetadata({ data: "json, name=firstDown" })
  firstDown?: number;

  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: number;

  @SpeakeasyMetadata({ data: "json, name=passing" })
  passing?: number;

  @SpeakeasyMetadata({ data: "json, name=rushing" })
  rushing?: number;

  @SpeakeasyMetadata({ data: "json, name=secondDown" })
  secondDown?: number;

  @SpeakeasyMetadata({ data: "json, name=thirdDown" })
  thirdDown?: number;
}


export class TeamPpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: TeamPpaDefense;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: TeamPpaOffense;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}
