import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerGamePpaAveragePpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: number;

  @Metadata({ data: "json, name=pass" })
  pass?: number;

  @Metadata({ data: "json, name=rush" })
  rush?: number;
}


export class PlayerGamePpa extends SpeakeasyBase {
  @Metadata({ data: "json, name=averagePPA" })
  averagePpa?: PlayerGamePpaAveragePpa;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=opponent" })
  opponent?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
