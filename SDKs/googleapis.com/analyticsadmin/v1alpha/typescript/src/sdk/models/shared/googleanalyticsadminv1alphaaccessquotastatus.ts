import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAccessQuotaStatus
/** 
 * Current state for a particular quota group.
**/
export class GoogleAnalyticsAdminV1alphaAccessQuotaStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumed" })
  consumed?: number;

  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining?: number;
}
