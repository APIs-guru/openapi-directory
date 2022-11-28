import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceQuotasRemaining
/** 
 * The resource quota tokens remaining for the property after the request is completed.
**/
export class ResourceQuotasRemaining extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyQuotaTokensRemaining" })
  dailyQuotaTokensRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=hourlyQuotaTokensRemaining" })
  hourlyQuotaTokensRemaining?: number;
}
