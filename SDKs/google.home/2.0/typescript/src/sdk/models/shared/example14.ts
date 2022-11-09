import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example14 extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_string" })
  displayString: string;

  @Metadata({ data: "json, name=offset" })
  offset: number;

  @Metadata({ data: "json, name=timezone" })
  timezone: string;
}
