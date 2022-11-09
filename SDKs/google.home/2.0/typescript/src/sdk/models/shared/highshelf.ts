import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HighShelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=frequency" })
  frequency: number;

  @Metadata({ data: "json, name=gain_db" })
  gainDb: number;

  @Metadata({ data: "json, name=quality" })
  quality: number;
}
