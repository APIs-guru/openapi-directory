import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";



// ReturnPolicyRequest
/** 
 * This root container defines a seller's return policy for a specific marketplace and category type. Used when creating or updating a return policy, returnPolicyRequest encapsulates a seller's terms for how buyers can return items. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Use the Metadata API method to determine which categories in the marketplace(s) require you to provide a return policy. Also note that some marketplaces require you to provide a specific return policy for vehicle listings. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
export class ReturnPolicyRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=returnShippingCostPayer" })
  returnShippingCostPayer?: string;

  @SpeakeasyMetadata({ data: "json, name=returnsAccepted" })
  returnsAccepted?: boolean;
}
