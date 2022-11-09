import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Phone } from "./phone";


// PhoneList
/** 
 * Phones List
**/
export class PhoneList extends SpeakeasyBase {
  @Metadata({ data: "json, name=phones", elemType: shared.Phone })
  phones: Phone[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
