import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeroImageDisplaySize } from "./heroimagedisplaysize";



export class HeroImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_sizes", elemType: HeroImageDisplaySize })
  displaySizes?: HeroImageDisplaySize[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
