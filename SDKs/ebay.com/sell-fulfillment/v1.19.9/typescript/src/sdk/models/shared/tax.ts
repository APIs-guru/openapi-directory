import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// Tax
/** 
 * This type contains information about any sales tax applied to a line item.
**/
export class Tax extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=taxType" })
  taxType?: string;
}
