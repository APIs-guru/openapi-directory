import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example14 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_string" })
  displayString: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone: string;
}
