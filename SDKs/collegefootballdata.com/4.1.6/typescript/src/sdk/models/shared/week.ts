import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Week extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstGameStart" })
  firstGameStart?: string;

  @SpeakeasyMetadata({ data: "json, name=lastGameStart" })
  lastGameStart?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
