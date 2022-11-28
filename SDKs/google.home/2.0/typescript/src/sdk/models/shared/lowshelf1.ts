import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LowShelf1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gain_db" })
  gainDb: number;
}
