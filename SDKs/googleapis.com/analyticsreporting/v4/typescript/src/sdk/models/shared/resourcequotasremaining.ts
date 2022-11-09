import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceQuotasRemaining
/** 
 * The resource quota tokens remaining for the property after the request is completed.
**/
export class ResourceQuotasRemaining extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailyQuotaTokensRemaining" })
  dailyQuotaTokensRemaining?: number;

  @Metadata({ data: "json, name=hourlyQuotaTokensRemaining" })
  hourlyQuotaTokensRemaining?: number;
}
