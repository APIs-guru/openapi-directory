import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HighShelf1 } from "./highshelf1";
import { LowShelf1 } from "./lowshelf1";



export class SetEqualizerValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high_shelf" })
  highShelf: HighShelf1;

  @SpeakeasyMetadata({ data: "json, name=low_shelf" })
  lowShelf: LowShelf1;
}
