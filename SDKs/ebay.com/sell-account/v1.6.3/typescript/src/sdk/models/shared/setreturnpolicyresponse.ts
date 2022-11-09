import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";
import { Error } from "./error";


// SetReturnPolicyResponse
/** 
 * Complex type that that gets populated with a response containing a return policy.
**/
export class SetReturnPolicyResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
