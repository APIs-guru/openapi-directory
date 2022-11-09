import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonthlyTransfer
/** 
 * Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).
**/
export class MonthlyTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=gbPerMonthAllocated" })
  gbPerMonthAllocated?: number;
}
