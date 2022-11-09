import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HeroImageDisplaySize } from "./heroimagedisplaysize";


export class HeroImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_sizes", elemType: shared.HeroImageDisplaySize })
  displaySizes?: HeroImageDisplaySize[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
