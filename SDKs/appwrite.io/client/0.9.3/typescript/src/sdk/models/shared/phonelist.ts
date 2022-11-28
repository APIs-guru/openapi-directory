import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";



// PhoneList
/** 
 * Phones List
**/
export class PhoneList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phones", elemType: Phone })
  phones: Phone[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
