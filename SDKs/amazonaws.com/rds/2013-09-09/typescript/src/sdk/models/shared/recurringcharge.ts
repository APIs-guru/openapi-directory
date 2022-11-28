import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecurringCharge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
