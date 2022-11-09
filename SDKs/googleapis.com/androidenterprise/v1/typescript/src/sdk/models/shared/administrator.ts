import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Administrator
/** 
 * This represents an enterprise admin who can manage the enterprise in the managed Google Play store.
**/
export class Administrator extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
