import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Administrator
/** 
 * This represents an enterprise admin who can manage the enterprise in the managed Google Play store.
**/
export class Administrator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
