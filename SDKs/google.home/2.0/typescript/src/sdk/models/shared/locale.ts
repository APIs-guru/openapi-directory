import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Locale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_string" })
  displayString: string;
}
