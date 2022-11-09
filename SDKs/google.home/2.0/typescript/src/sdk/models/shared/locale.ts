import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Locale extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_string" })
  displayString: string;
}
