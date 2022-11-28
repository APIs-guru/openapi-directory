import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";
import { Error } from "./error";



// SetReturnPolicyResponse
/** 
 * Complex type that that gets populated with a response containing a return policy.
**/
export class SetReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType })
  categoryTypes?: CategoryType[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extendedHolidayReturnsOffered" })
  extendedHolidayReturnsOffered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=internationalOverride" })
  internationalOverride?: InternationalReturnOverrideType;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=refundMethod" })
  refundMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=restockingFeePercentage" })
  restockingFeePercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=returnInstructions" })
  returnInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=returnMethod" })
  returnMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPeriod" })
  returnPeriod?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnShippingCostPayer" })
  returnShippingCostPayer?: string;

  @SpeakeasyMetadata({ data: "json, name=returnsAccepted" })
  returnsAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
