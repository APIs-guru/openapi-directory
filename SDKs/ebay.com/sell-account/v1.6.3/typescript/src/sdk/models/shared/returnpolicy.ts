import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";


// ReturnPolicy
/** 
 * Root container that defines the fields for a seller's return policy. The returnPolicy encapsulates a seller's terms for how they handle item returns, the name and description of the policy, and the marketplace and category group(s) to which the return policy is applied. While each seller must define at least one return policy for every marketplace into which they sell, sellers can define multiple return policies for a single marketplace by specifying different configurations for the unique policies.
**/
export class ReturnPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryTypes", elemType: shared.CategoryType })
  categoryTypes?: CategoryType[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extendedHolidayReturnsOffered" })
  extendedHolidayReturnsOffered?: boolean;

  @Metadata({ data: "json, name=internationalOverride" })
  internationalOverride?: InternationalReturnOverrideType;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=refundMethod" })
  refundMethod?: string;

  @Metadata({ data: "json, name=restockingFeePercentage" })
  restockingFeePercentage?: string;

  @Metadata({ data: "json, name=returnInstructions" })
  returnInstructions?: string;

  @Metadata({ data: "json, name=returnMethod" })
  returnMethod?: string;

  @Metadata({ data: "json, name=returnPeriod" })
  returnPeriod?: TimeDuration;

  @Metadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;

  @Metadata({ data: "json, name=returnShippingCostPayer" })
  returnShippingCostPayer?: string;

  @Metadata({ data: "json, name=returnsAccepted" })
  returnsAccepted?: boolean;
}
