import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerGamePpaAveragePpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: number;

  @SpeakeasyMetadata({ data: "json, name=pass" })
  pass?: number;

  @SpeakeasyMetadata({ data: "json, name=rush" })
  rush?: number;
}


export class PlayerGamePpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averagePPA" })
  averagePpa?: PlayerGamePpaAveragePpa;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=opponent" })
  opponent?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
