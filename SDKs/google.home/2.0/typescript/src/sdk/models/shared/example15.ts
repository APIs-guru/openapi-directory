import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example15 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_string" })
  displayString: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: string;
}
