import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";



// ReturnPolicy
/** 
 * Root container that defines the fields for a seller's return policy. The returnPolicy encapsulates a seller's terms for how they handle item returns, the name and description of the policy, and the marketplace and category group(s) to which the return policy is applied. While each seller must define at least one return policy for every marketplace into which they sell, sellers can define multiple return policies for a single marketplace by specifying different configurations for the unique policies.
**/
export class ReturnPolicy extends SpeakeasyBase {
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
}
