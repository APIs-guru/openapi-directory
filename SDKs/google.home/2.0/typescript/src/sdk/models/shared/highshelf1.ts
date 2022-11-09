import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HighShelf1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=gain_db" })
  gainDb: number;
}
