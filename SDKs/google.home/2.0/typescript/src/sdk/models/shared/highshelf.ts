import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HighShelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: number;

  @SpeakeasyMetadata({ data: "json, name=gain_db" })
  gainDb: number;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: number;
}
