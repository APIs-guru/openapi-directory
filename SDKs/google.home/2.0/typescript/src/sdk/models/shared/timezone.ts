import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Timezone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_string" })
  displayString: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;
}
