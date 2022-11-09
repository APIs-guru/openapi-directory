import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Week extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstGameStart" })
  firstGameStart?: string;

  @Metadata({ data: "json, name=lastGameStart" })
  lastGameStart?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
