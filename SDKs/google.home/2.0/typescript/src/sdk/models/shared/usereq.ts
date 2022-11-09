import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HighShelf } from "./highshelf";
import { LowShelf } from "./lowshelf";


export class UserEq extends SpeakeasyBase {
  @Metadata({ data: "json, name=high_shelf" })
  highShelf: HighShelf;

  @Metadata({ data: "json, name=low_shelf" })
  lowShelf: LowShelf;

  @Metadata({ data: "json, name=max_peaking_eqs" })
  maxPeakingEqs: number;

  @Metadata({ data: "json, name=peaking_eqs" })
  peakingEqs: string[];
}
