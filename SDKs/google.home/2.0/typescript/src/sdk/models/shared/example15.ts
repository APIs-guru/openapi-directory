import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example15 extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_string" })
  displayString: string;

  @Metadata({ data: "json, name=locale" })
  locale: string;
}
