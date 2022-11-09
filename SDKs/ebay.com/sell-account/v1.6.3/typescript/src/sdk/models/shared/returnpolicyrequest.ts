import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";


// ReturnPolicyRequest
/** 
 * This root container defines a seller's return policy for a specific marketplace and category type. Used when creating or updating a return policy, returnPolicyRequest encapsulates a seller's terms for how buyers can return items. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Use the Metadata API method to determine which categories in the marketplace(s) require you to provide a return policy. Also note that some marketplaces require you to provide a specific return policy for vehicle listings. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
export class ReturnPolicyRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=returnShippingCostPayer" })
  returnShippingCostPayer?: string;

  @Metadata({ data: "json, name=returnsAccepted" })
  returnsAccepted?: boolean;
}
