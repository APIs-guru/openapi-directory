import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Timezone extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_string" })
  displayString: string;

  @Metadata({ data: "json, name=offset" })
  offset: number;
}
