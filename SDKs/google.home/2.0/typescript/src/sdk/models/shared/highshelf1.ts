import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HighShelf1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gain_db" })
  gainDb: number;
}
