import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// Tax
/** 
 * This type contains information about any sales tax applied to a line item.
**/
export class Tax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=taxType" })
  taxType?: string;
}
