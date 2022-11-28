import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecurringCharge
/** 
 * Describes a recurring charge.
**/
export class RecurringCharge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
