import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BasePopular } from "./basepopular";
import { BasePopular } from "./basepopular";


// PopularCars
/** 
 * Top 50 popular cars
**/
export class PopularCars extends SpeakeasyBase {
  @Metadata({ data: "json, name=new_top50", elemType: shared.BasePopular })
  newTop50?: BasePopular[];

  @Metadata({ data: "json, name=used_top50", elemType: shared.BasePopular })
  usedTop50?: BasePopular[];
}
