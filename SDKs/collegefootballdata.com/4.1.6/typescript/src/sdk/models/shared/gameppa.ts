import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GamePpaDefense extends SpeakeasyBase {
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


export class GamePpaOffense extends SpeakeasyBase {
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


export class GamePpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=defense" })
  defense?: GamePpaDefense;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=offense" })
  offense?: GamePpaOffense;

  @Metadata({ data: "json, name=opponnent" })
  opponnent?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
