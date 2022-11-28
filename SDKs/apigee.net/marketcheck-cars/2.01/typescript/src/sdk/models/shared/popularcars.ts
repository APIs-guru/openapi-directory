import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasePopular } from "./basepopular";



// PopularCars
/** 
 * Top 50 popular cars
**/
export class PopularCars extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=new_top50", elemType: BasePopular })
  newTop50?: BasePopular[];

  @SpeakeasyMetadata({ data: "json, name=used_top50", elemType: BasePopular })
  usedTop50?: BasePopular[];
}
