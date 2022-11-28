import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GamePpaDefense extends SpeakeasyBase {
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


export class GamePpaOffense extends SpeakeasyBase {
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


export class GamePpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: GamePpaDefense;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: GamePpaOffense;

  @SpeakeasyMetadata({ data: "json, name=opponnent" })
  opponnent?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
