import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HighShelf1 } from "./highshelf1";
import { LowShelf1 } from "./lowshelf1";


export class SetEqualizerValuesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=high_shelf" })
  highShelf: HighShelf1;

  @Metadata({ data: "json, name=low_shelf" })
  lowShelf: LowShelf1;
}
