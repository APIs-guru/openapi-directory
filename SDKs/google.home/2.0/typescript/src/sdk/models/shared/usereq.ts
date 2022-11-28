import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HighShelf } from "./highshelf";
import { LowShelf } from "./lowshelf";



export class UserEq extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high_shelf" })
  highShelf: HighShelf;

  @SpeakeasyMetadata({ data: "json, name=low_shelf" })
  lowShelf: LowShelf;

  @SpeakeasyMetadata({ data: "json, name=max_peaking_eqs" })
  maxPeakingEqs: number;

  @SpeakeasyMetadata({ data: "json, name=peaking_eqs" })
  peakingEqs: string[];
}
